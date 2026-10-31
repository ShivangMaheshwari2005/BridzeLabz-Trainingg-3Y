ASSIGNMENT 6 – JAVASCRIPT ASYNC PROGRAMMING

Files:
Q1_async_coffee.js
Q2_event_loop_micro_macro.js
Q3_bug_tracker_promise.js
Q4_server_response_race.js
Q5_callback_hell_vs_async_await.js
Q6_product_fetcher.js
Q7_promise_all_settled.js
Q8_order_retry.js
Q9_debug_event_loop.js
Q10_async_delivery_pipeline.js
index.html (Q6 product dashboard)

HOW TO RUN:
1. Extract the ZIP file.
2. Open the Assignment_6 folder in VS Code.
3. For Q1–Q5 and Q7–Q10, open a terminal in this folder and run:
   node filename.js
   Example: node Q1_async_coffee.js

4. Q6 uses fetch() and document, so open index.html in a browser.
   An internet connection is required to access Fake Store API.
   If your browser blocks requests when opening the file directly,
   run a local server (for example, VS Code Live Server).

NOTES:
- Random failures are intentional in the questions that request them.
  Run those files again if a failure occurs.
- In Q5, runWithCallbacks() is enabled by default.
  Comment it and uncomment runWithAsyncAwait() to test the second version.
- Each question is kept in its own JavaScript file.
