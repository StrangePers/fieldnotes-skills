"""Serve the two fictional task-list cases on loopback. Requires Python 3."""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


PAGE = b"""<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>Sample task panel</title>
<h1>Sample panel</h1>
<button type="button">Tasks</button>
<section hidden><h2>Tasks</h2><p role="status"></p></section>
<script>
document.querySelector("button").onclick = async () => {
  document.querySelector("section").hidden = false;
  const status = document.querySelector("[role=status]");
  status.textContent = "Loading";
  const response = await fetch("/api/tasks" + location.pathname);
  const data = await response.json();
  // Intentional fixture defect: the error object also takes the empty branch.
  status.textContent = Array.isArray(data) && data.length ? "Tasks loaded" : "No tasks";
};
</script>
</html>"""


class Panel(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path in ("/empty", "/failure"):
            status, media_type, body = 200, "text/html", PAGE
        elif self.path == "/api/tasks/empty":
            status, media_type, body = 200, "application/json", b"[]"
        elif self.path == "/api/tasks/failure":
            status, media_type, body = 500, "application/json", b'{"error":"unavailable"}'
        else:
            self.send_error(404)
            return
        self.send_response(status)
        self.send_header("Content-Type", media_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    with ThreadingHTTPServer(("127.0.0.1", 0), Panel) as server:
        for case in ("empty", "failure"):
            print(f"http://127.0.0.1:{server.server_port}/{case}", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
