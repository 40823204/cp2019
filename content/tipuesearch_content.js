var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://mde.tw/cp2019 \n   https://dartpad.dev/embed-inline.html?id=bf26fe6a498b51d080713c27744298d1 \n   https://dartpad.dev/embed-inline.html?id=6cc59709dc5af1e2d6362f84ecc81620 \n   https://dartpad.dev/embed-inline.html?id=a5ca713bfd1aebc5967d35d9d839a7e8 \n \n 課堂筆記 \n \n 程式碼 \n void main() {\n   print("哈囉!");\n} \n \n w6 \n 程式碼 \n int i;\nint sum;\n\nmain() {\n  sum = 0;\n  for (i=1;i <= 10 ;i++) {\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n} \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W6', 'text': '\n 程式碼 \n int i;\nint sum;\n\nmain() {\n  sum = 0;\n  for (i=1;i <= 10 ;i++) {\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n} \n \n  取 Dart 程式的按鈕  \n Hello   For Loop   Sum   Runge-Kutta   Mass Spring Damping   ROC Flag   Grid \n \n \n   https://dartpad.dev/embed-inline.html?id=6cc59709dc5af1e2d6362f84ecc81620 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': "程式碼 \n rungeKutta(t0, x0, t, h) {\n  int n = ((t - t0) / h).toInt();\n  double x = x0;\n  for (int i = 1; i <= n; i++) {\n    double k1 = h * dxdt(t0, x);\n    double k2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k1);\n    double k3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k2);\n    double k4 = h * dxdt(t0 + h, x + k3);\n    x = x + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);\n    t0 = t0 + h;\n  }\n  return x;\n}\n \ndxdt(t, x) {\n  return ((t - x) / 2);\n}\n \nmain() {\n  num t0 = 0;\n  num x = 1;\n  num t = 2;\n  double h = 0.2;\n  print('The value of x at t=$t is: ${rungeKutta(t0, x, t, h)}');\n} \n \n  取 Dart 程式的按鈕  \n Hello   For Loop   Sum   Runge-Kutta   Mass Spring Damping   ROC Flag   Grid \n \n \n   https://dartpad.dev/embed-inline.html?id=a5ca713bfd1aebc5967d35d9d839a7e8 \n \xa0 \n \n \n \xa0 \xa0 \xa0 \xa0 \n", 'tags': '', 'url': 'W7.html'}, {'title': 'W11', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    temperature \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '1. 新增 " 攝氏與華氏自動判別" 的按鈕 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    Temperature   CF_change \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Temp1 \n Html 程式 \n Temp2    內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '純 Dart 程式 \n Temp1 \n Html 程式 \n Temp2    內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '純 Dart 程式 \n 重量轉換 \n Html 程式 \n 重量轉換 \n 各國國旗 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n . \n \n 請輸入所要轉換的重量 以數字加上 kg 或 lb:     轉換結果: \n \n 國旗 \n \n Clear Canvas   Draw Cuba   Draw CHINA   Draw SAN   Draw USA   Draw UK   Draw Canada \n \n w16查驗考試 <<  Previous \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'W17.html'}]};