const repo = "https://github.com/StrangePers/fieldnotes-skills";
const params = new URLSearchParams(location.search);
const lang = params.get("lang") === "ru" || (!params.has("lang") && navigator.language.startsWith("ru")) ? "ru" : "en";
const t = (ru, en) => lang === "ru" ? ru : en;
const byId = (id) => document.getElementById(id);
const put = (id, value) => { byId(id).textContent = value; };
const groupNames = {
  "Development workflows": t("Общая разработка", "Development workflows"),
  "C++ and Qt": t("C++ и Qt", "C++ and Qt"),
  Android: "Android",
};
document.documentElement.lang = lang;
document.title = t("Каталог", "Catalog") + " · Fieldnotes Skills";
put("nav-list", t("Каталог", "Catalog"));
put("nav-setup", t("Подключение", "Setup"));
put("intro-text", t("Библиотека рабочих инструкций для ИИ-агентов. OpenCode выбирает подходящий скилл по описанию задачи: от передачи на ревью до проверки замены DLL в готовой сборке.", "A shared library of workflows for coding agents. OpenCode can choose a skill by task, from handing off a change for review to testing a replacement DLL in a released build."));
put("cta", t("Подключить к проекту ↓", "Connect to a project ↓"));
put("edition", t("Ваш экземпляр каталога", "Your catalog edition"));
put("choose", t("Состав набора", "Choose the scope"));
put("core-label", t("Без Android", "Without Android"));
put("android-label", t("С Android", "Include Android"));
put("catalog-title", t("Что входит", "Inside the catalog"));
put("catalog-note", t("Раскройте раздел и выберите карточку, чтобы прочитать инструкцию и разобрать задачу на примере.", "Expand a section and open a skill to read its workflow."));
put("setup-title", t("Подключение", "Project setup"));
put("setup-intro", t("Начните в корне Git- или SVN-проекта. Понадобятся Git, PowerShell и OpenCode CLI. Соседние проекты могут использовать один клон выбранного набора.", "Start in the root of your Git project or SVN working copy with Git, PowerShell and OpenCode CLI installed. Sibling projects can share one clone of each edition."));
const toggleLang = byId("language");
toggleLang.textContent = lang === "ru" ? "EN" : "RU";
toggleLang.hreflang = lang === "ru" ? "en" : "ru";

function el(tag, content) {
  const node = document.createElement(tag);
  if (content !== undefined) node.textContent = content;
  return node;
}
function groupList(items) {
  const groups = byId("groups");
  groups.replaceChildren();
  for (const [key, name] of Object.entries(groupNames)) {
    const rows = items.filter(skill => skill.group === key);
    if (!rows.length) continue;
    const details = el("details");
    const head = el("summary", name);
    head.append(el("small", String(rows.length)));
    const list = el("ul");
    list.className = "cards";
    for (const skill of rows) {
      const li = el("li");
      const link = el("a", skill.id);
      link.href = repo + "/blob/main/skills/" + skill.id + "/SKILL.md";
      li.append(link, el("p", skill[lang]));
      list.append(li);
    }
    details.append(head, list);
    groups.append(details);
  }
}
function step(title, help, code) {
  const node = el("article");
  node.className = "step";
  const snippet = el("div");
  snippet.className = "snippet";
  const copy = el("button", t("Копировать", "Copy"));
  copy.type = "button";
  copy.setAttribute("aria-label", copy.textContent + " · " + title);
  copy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      copy.textContent = t("Готово", "Copied");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(snippet.querySelector("pre"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copy.textContent = "Ctrl+C";
    }
  };
  snippet.append(el("pre", code), copy);
  node.append(el("h3", title), el("p", help), snippet);
  byId("steps").append(node);
}
function render(plusAndroid) {
  const items = catalog.filter(s => plusAndroid || s.group !== "Android");
  const folder = plusAndroid ? "../fieldnotes-skills" : "../fieldnotes-skills-core";
  const source = folder + "/skills";
  const mode = plusAndroid ? "android" : "core";
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  url.searchParams.set("set", mode);
  history.replaceState(null, "", url);
  url.searchParams.set("lang", toggleLang.hreflang);
  toggleLang.href = url.href;
  document.querySelector('input[value="' + mode + '"]').checked = true;
  put("count", String(items.length));
  put("unit", t("скилла в наборе", "skills selected"));
  if (plusAndroid) put("unit", t("скиллов в наборе", "skills selected"));
  put("mode-note", plusAndroid
    ? t("Добавлены проверки Android: устройство, ресурсы локализации, скриншоты, сборки и ANR.", "Includes Android device checks, localized resources and screenshots, release artifacts and ANR triage.")
    : t("Общие рабочие процессы и C++/Qt. Диагностика собственных бинарников входит в оба набора.", "Development workflows and C++/Qt. Both editions include diagnostics for your own binaries."));
  put("catalog-meta", items.length + " / " + catalog.length);
  groupList(items);
  byId("steps").replaceChildren();
  let clone = "git clone " + (plusAndroid ? "" : "--sparse ") + repo + ".git " + folder;
  const applySelection = "$selection = git -C " + folder + " show HEAD:profiles/catalog/without-android.sparse\nif ($LASTEXITCODE -ne 0) { throw 'Cannot read the catalog selection' }\n$selection | git -C " + folder + " sparse-checkout set --no-cone --stdin";
  if (!plusAndroid) clone += "\nif ($LASTEXITCODE -ne 0) { throw 'Clone failed' }\n" + applySelection;
  step(t("1. Получите каталог", "1. Get the catalog"),
    t("Клонируйте один раз для этой группы проектов. Если такой клон уже есть, используйте его.", "Clone once for these projects. Reuse the matching clone if you already have it."), clone);
  step(t("2. Укажите путь в OpenCode", "2. Point OpenCode at the skills"),
    t("Создайте opencode.jsonc в корне проекта. В существующем конфиге дополните массив skills. При смене набора замените прежний путь каталога, сохранив остальные настройки.", "Create opencode.jsonc in the project root. For an existing config, merge the path into skills. When switching editions, replace the previous catalog path and keep your other settings."),
    JSON.stringify({skills:[source]}, null, 2));
  const verify = [
    "$root = (Resolve-Path '" + source + "').Path",
    "$expected = @(Get-ChildItem -LiteralPath $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName 'SKILL.md') } | ForEach-Object Name)",
    "$cli = Get-Command opencode.cmd, opencode.exe -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1",
    '$response = & $cli.Source api GET /api/skill --header "x-opencode-directory: $PWD" | ConvertFrom-Json',
    'if ($LASTEXITCODE -ne 0) { throw "OpenCode API failed" }',
    "$found = @($response.data | Where-Object { $_.path -and $_.path.Replace('/', '\\') -ieq \"$root\\$($_.id)\\SKILL.md\" } | ForEach-Object id)",
    "$diff = @(Compare-Object $expected $found)",
    'if ($diff.Count -or $found.Count -ne ' + items.length + ') { $diff; throw "Found $($found.Count) catalog skills; expected ' + items.length + '." }',
    '"OK: ' + items.length + '/' + items.length + ' Fieldnotes skills"'
  ].join("\n");
  step(t("3. Проверьте подключение", "3. Verify discovery"),
    t("Ожидаемый результат — ", "Expected output is ") + "OK: " + items.length + "/" + items.length + " Fieldnotes skills. " +
    t("При первом запуске OpenCode повторите проверку через несколько секунд.", "Allow a few seconds at startup and repeat if needed."), verify);
  let update = "git -C " + folder + " pull --ff-only";
  if (!plusAndroid) update += "\nif ($LASTEXITCODE -ne 0) { throw 'Update failed' }\n" + applySelection;
  step(t("Обновление", "Update"), t("Выполните из корня проекта и повторите проверку.", "Run from the project root, then repeat the discovery check."), update);
  const link = el("a", t("Отдельный профиль native с Superpowers ↗", "Separate native profile with Superpowers ↗"));
  link.href = repo + "/blob/main/profiles/native/README.md";
  byId("optional").replaceChildren(link);
}
document.querySelectorAll('input[name="mode"]').forEach(input => {
  input.addEventListener("change", () => render(input.value === "android"));
});
render(params.get("set") === "android");
