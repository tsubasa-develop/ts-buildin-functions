import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";

listenAndServe(":8000", () => new Response("Hello World\n"));
console.log("http://localhost:8000/");
