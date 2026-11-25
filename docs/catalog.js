const catalog = [
  {
    "id": "task-brief-and-handoff",
    "group": "Development workflows",
    "ru": "Сформулировать критерии приёмки и передать ревьюеру ревизию с воспроизводимой проверкой.",
    "en": "Turn an agreed task into a scoped implementation brief and hand off reviewable evidence on completion."
  },
  {
    "id": "binary-debug-evidence",
    "group": "Development workflows",
    "ru": "Сопоставить сбой собственной сборки с бинарником, символами и исходной ревизией.",
    "en": "Relate a crash in a team's own release build to matching binaries, symbols and source, and distinguish reconstructed code from verified evidence."
  },
  {
    "id": "change-evidence-review",
    "group": "Development workflows",
    "ru": "Определить, какие проверки всё ещё подтверждают результат после изменений в PR.",
    "en": "Review whether test and CI results support a specific behavior on the Git revision proposed for merge, especially after a PR update or a local test run."
  },
  {
    "id": "skill-visibility-check",
    "group": "Development workflows",
    "ru": "Проследить путь карточки от выбора в профиле до обнаружения агентом.",
    "en": "Diagnose a Fieldnotes skill missing from a Codex project by tracing the selected workspace profile, installed skill directory and effective Codex skill list."
  },
  {
    "id": "remote-write-reconciliation",
    "group": "Development workflows",
    "ru": "Узнать, выполнилась ли удалённая операция, прежде чем повторять запрос.",
    "en": "Determine whether a remote create or update took effect after a timeout or lost response, and whether a retry could duplicate or overwrite work."
  },
  {
    "id": "benchmark-comparison-review",
    "group": "Development workflows",
    "ru": "Сопоставить условия замеров и проверить, воспроизводится ли ускорение.",
    "en": "Review a performance claim about two builds or configurations when workload, cache state, run order or incomplete measurements could explain the result."
  },
  {
    "id": "isolated-ui-smoke-check",
    "group": "Development workflows",
    "ru": "Выполнить действие в чистом профиле и проверить результат за видимым экраном.",
    "en": "Smoke-test a running web or desktop interface in a disposable profile when a healthy launch or visible heading could hide a broken user action."
  },
  {
    "id": "analytics-event-validation",
    "group": "Development workflows",
    "ru": "Проверить, отвечают ли записанные события на вопрос аналитика.",
    "en": "Validate that analytics events distinguish the outcomes a product metric needs, especially after a release changes event fields or a dashboard starts showing zeros."
  },
  {
    "id": "quickstart-example-check",
    "group": "Development workflows",
    "ru": "Пройти инструкцию первого запуска на чистом проекте и найти пропущенные шаги.",
    "en": "Verify that a new user can follow a published quickstart from its stated prerequisites to the promised result, including setup that tests or a maintainer's environment may supply implicitly."
  },
  {
    "id": "release-notes-coverage",
    "group": "Development workflows",
    "ru": "Сверить описание релиза с изменениями для пользователей и шагами миграции.",
    "en": "Review release notes against the actual changes since the previous applicable release and identify missing user-visible effects or migration steps."
  },
  {
    "id": "shared-test-resource-handoff",
    "group": "Development workflows",
    "ru": "Передать общий стенд или базу данных следующей тестовой задаче.",
    "en": "Decide when a second test job can take over a shared database, device or staging environment after the first job disconnects or appears to finish."
  },
  {
    "id": "project-instruction-drift",
    "group": "Development workflows",
    "ru": "Найти устаревшую команду в инструкциях одного из проектов.",
    "en": "Audit shared repository instructions when a documented command, directory or convention may have diverged across projects."
  },
  {
    "id": "dependency-conflict-triage",
    "group": "Development workflows",
    "ru": "Найти зависимость, из-за которой конфликтуют требования к версиям.",
    "en": "Diagnose a dependency solver failure by tracing competing requirements to their owners and testing a minimal compatible change."
  },
  {
    "id": "regression-test-sensitivity",
    "group": "Development workflows",
    "ru": "Проверить, падает ли тест при возврате известного дефекта.",
    "en": "Check whether a passing regression test actually detects the reported defect by comparing known-bad and corrected behavior on the same input."
  },
  {
    "id": "settings-recovery-check",
    "group": "Development workflows",
    "ru": "Проверить загрузку настроек при первом запуске, повреждении файла и ошибке чтения.",
    "en": "Review settings recovery when a missing file, malformed data or a transient read failure might silently overwrite an existing configuration."
  },
  {
    "id": "pagination-continuity-check",
    "group": "Development workflows",
    "ru": "Выявить дубли страниц и устаревшие курсоры после смены фильтра.",
    "en": "Check paginated results for lost, duplicated or stale records after a failed page request, retry or filter change."
  },
  {
    "id": "async-cancellation-check",
    "group": "Development workflows",
    "ru": "Проверить сохранность предыдущего результата после отмены операции.",
    "en": "Verify that cancelling an asynchronous operation reaches its child work and leaves output in the promised state."
  },
  {
    "id": "component-boundary-trace",
    "group": "Development workflows",
    "ru": "Найти границу компонентов, на которой теряется корректное значение.",
    "en": "Localize an incorrect result in a multi-component workflow by following one synthetic input across service, queue and worker boundaries."
  },
  {
    "id": "keyboard-focus-path-check",
    "group": "Development workflows",
    "ru": "Проследить фокус клавиатуры при открытии и закрытии диалога.",
    "en": "Verify keyboard reachability, activation and focus restoration across a UI interaction such as opening and closing a modal dialog."
  },
  {
    "id": "issue-readiness-check",
    "group": "Development workflows",
    "ru": "Выяснить, мешает ли связанная задача приступить к реализации.",
    "en": "Review whether an issue marked ready has enough decisions, resolved dependencies and observable acceptance criteria to start the intended implementation."
  },
  {
    "id": "skill-selection-evaluation",
    "group": "Development workflows",
    "ru": "Измерить, когда агент выбирает подходящий скилл, пропускает его или выбирает лишний.",
    "en": "Evaluate whether an agent selects the intended skill among similar available skills, including requests that should use none."
  },
  {
    "id": "cli-output-contract-check",
    "group": "Development workflows",
    "ru": "Проверить stdout, диагностику и коды завершения CLI.",
    "en": "Check whether scripts can consume a CLI's standard output and use its exit status and diagnostics on both success and failure."
  },
  {
    "id": "cross-platform-path-check",
    "group": "Development workflows",
    "ru": "Разобрать путь другой ОС с сохранением диска, имени файла и позиции.",
    "en": "Interpret file locations produced on another operating system when separators, drive letters, spaces or line and column suffixes can change their meaning."
  },
  {
    "id": "package-contents-check",
    "group": "Development workflows",
    "ru": "Найти ресурсы, которые есть в исходниках и пропали из пакета.",
    "en": "Verify that an installable package includes the resources, executable files or native assets that its consumer actually needs outside the source checkout."
  },
  {
    "id": "consumer-api-compatibility",
    "group": "Development workflows",
    "ru": "Пересобрать существующий клиент с новой версией библиотеки.",
    "en": "Test a library upgrade against an unchanged consumer and distinguish source compilation, binary linkage and behavioral compatibility."
  },
  {
    "id": "rollout-cohort-check",
    "group": "Development workflows",
    "ru": "Сравнить группы пользователей перед расширением поэтапного релиза.",
    "en": "Assess a staged rollout using comparable exposure, outcomes and observation windows before deciding whether rollout evidence supports expansion."
  },
  {
    "id": "offline-refresh-check",
    "group": "Development workflows",
    "ru": "Проверить кеш после сбоя обновления и восстановления сети.",
    "en": "Verify a data screen across cold offline startup, cached startup, refresh failure and connectivity recovery."
  },
  {
    "id": "deep-link-resume-check",
    "group": "Development workflows",
    "ru": "Проверить переход к нужному объекту после холодного запуска и входа.",
    "en": "Check that a direct link reaches the intended destination after cold startup, session restoration or sign-in, with access enforced at the destination."
  },
  {
    "id": "responsive-container-check",
    "group": "Development workflows",
    "ru": "Проверить доступность действий при сужении контейнера внутри окна.",
    "en": "Verify that controls remain reachable as their containing pane changes width inside a fixed-size window."
  },
  {
    "id": "qt-headless-ui-check",
    "group": "C++ and Qt",
    "ru": "Выполнить действие в Qt на виртуальном дисплее и проверить изменение состояния.",
    "en": "Check whether a Qt Widgets or Qt Quick interaction on a virtual display reaches the intended control and changes application state."
  },
  {
    "id": "cpp-dll-abi-check",
    "group": "C++ and Qt",
    "ru": "Запустить выпущенный клиент с новой DLL и комплектом зависимостей.",
    "en": "Verify a Windows DLL upgrade with an existing C++ client, including loaded dependency versions and the complete Qt runtime when applicable."
  },
  {
    "id": "native-decompiler-crosscheck",
    "group": "C++ and Qt",
    "ru": "Сверить реконструкцию вычисления в собственной оптимизированной сборке с тестом.",
    "en": "Check an ambiguous calculation in a team's own optimized native build against matching symbols, machine instructions and controlled test inputs."
  },
  {
    "id": "android-device-state-check",
    "group": "Android",
    "ru": "Проверить изменение интерфейса на Android-устройстве с сохранением пользовательских данных.",
    "en": "Check an Android UI change on a real device when the existing install and its user data must be preserved."
  },
  {
    "id": "localized-screenshot-review",
    "group": "Android",
    "ru": "Сравнить один экран Android в нескольких локалях и найти обрезанный текст.",
    "en": "Review a set of Android screenshots across locales for matched UI state, layout defects and suitability for sharing."
  },
  {
    "id": "android-localization-resource-review",
    "group": "Android",
    "ru": "Проверить аргументы строк, формы множественного числа и резервную локаль.",
    "en": "Review a change to Android string and plural resources for missing format arguments, unintended fallback and incorrect quantity forms before UI review."
  },
  {
    "id": "android-release-artifact-check",
    "group": "Android",
    "ru": "Проследить, какие APK из конкретного AAB прошли проверку.",
    "en": "Check whether Android release test evidence belongs to the exact candidate App Bundle (AAB) selected for handoff, including cases where a rebuild has the same version."
  },
  {
    "id": "android-anr-triage",
    "group": "Android",
    "ru": "Сопоставить стеки и время событий при расследовании зависания Android.",
    "en": "Triage an Android Application Not Responding report when stacks, event timing or release exposure leave the cause or regression status uncertain."
  }
];
