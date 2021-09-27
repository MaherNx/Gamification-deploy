import $ from 'jquery'
let data = [
  {
     "clue": "صفحة تواصل خاصة بالموظفين على تطبيق فيسبوك تسمى …… ؟",
     "answer": "بالتلكلوب",
     "position": 1,
     "orientation": "across",
     "startx": 15,
     "starty": 2
  },
{
  "clue": "يمكن ارتداء الجينز فقط يوم …… ؟",
  "answer": "الخميس",
  "position":1 ,
  "orientation": "down",
  "startx": 16,
  "starty": 2
  },
{
  "clue": " في اي طابق يوجد المصلى ؟",
  "answer": "السابع",
  "position":2 ,
  "orientation": "down",
  "startx": 4,
  "starty": 4
},
{
  "clue": " يمكنك الاستفادة من العروض المختلفة على المنتجات التكنولوجية عن طريق تطبيق خاص ببالتل يسمى .... ؟",
  "answer": "بالتلستور",
  "position": 3,
  "orientation": "down",
  "startx": 12,
  "starty": 4
},
{
  "clue": "آلية معرفة أخر أخبار الشركة والتعاميم الداخلية والاطلاع على الروابط المهمة يتم عن طريق صفحة.... ؟",
  "answer": "الهوم",
  "position": 2,
  "orientation": "across",
  "startx": 12,
  "starty": 5
},
{
  "clue": "يقع البزنس سنتر في مدينة.... ؟ ",
  "answer": "رامالله",
  "position": 4,
  "orientation": "down",
  "startx": 6,
  "starty": 6
},
{
  "clue": " TV بعد مرور ثلاثة اشهر تجريبية يمكنك الاستفادة من عرض التلفاز المقدم من شركة .... ؟",
  "answer": "حضارة",
  "position": 5,
  "orientation": "down",
  "startx": 1,
  "starty": 7
},
{
  "clue": "التطبيق الخاص بشركة الاتصالات مع مشتركيها يسمى ……. ؟",
  "answer": "انابالتل",
  "position": 3,
  "orientation": "across",
  "startx": 6,
  "starty":7
},
{
  "clue": "في أي مدينة تقع أكاديمية الاتصالات ؟",
  "answer": "اريحا",
  "position": 6,
  "orientation": "down",
  "startx": 10,
  "starty": 7
},
{
  "clue": "رقم 2985 هو رقم خاص للاتصال ب .....؟",
  "answer": "الدعمالفني",
  "position": 4,
  "orientation": "across",
  "startx": 1,
  "starty": 9
},
{
  "clue": " لا يسمح أن تزيد المغادرة في بداية الدوام عن …… ؟",
  "answer": "ساعتين",
  "position": 7,
  "orientation": "down",
  "startx": 18,
  "starty":9
},
{
  "clue": "بالتل حياتك كما .... ؟ ",
  "answer": "تتمناها",
  "position": 5,
  "orientation": "across",
  "startx":12,
  "starty": 10
},
{
  "clue": "اسم محطة محروقات يمكنك الحصول على بطاقة تعبئة البنزين من خلالها حيث يتم خصم المسحوبات من الراتب اضافة لكوبون غسيل السيارة ؟",
  "answer": "الهدى",
  "position": 8,
  "orientation": "down",
  "startx": 16,
  "starty": 10
},
{
  "clue": " فترة السماح للتأخر عن الدوام الصباحي ….. ساعة ؟",
  "answer": "ربع",
  "position": 6,
  "orientation": "across",
  "startx": 12,
  "starty": 12
}
] 



window.onload = () => {
      console.log("heyyyyyyyyyyy")
      // $(".puzzle-container").crossword(data, () => load_page());
      $(".puzzle-container").crossword(data, () => $('#exampleModalCenter').modal('show'));
    

  // Sets the theme
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("html").addClass("dark");
  }
};


function load_page(){
window.location.replace("win.html");
  };


  // let data = [
  //   {
  //      "clue": "ما هي سرعة الأبلود الخاصة في خدمة الفايلاين سوهو ؟",
  //      "answer": "سبعةميجا",
  //      "position": 3,
  //      "orientation": "down",
  //      "startx": 6,
  //      "starty": 1
  //   },
  // {
  //   "clue": "ماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  //   "answer": "رقمالهوية",
  //   "position": 3,
  //   "orientation": "down",
  //   "startx": 16,
  //   "starty": 2
  //   },
  // {
  //   "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  //   "answer": "وكلاء",
  //   "position": 3,
  //   "orientation": "down",
  //   "startx": 2,
  //   "starty": 3
  // },
  // {
  //   "clue": "ماهي السرعات المتوفرة الخاصة بخدمة سوهو فاي لاين لايت؟",
  //   "answer": "عشرونميجا",
  //   "position": 3,
  //   "orientation": "down",
  //   "startx": 9,
  //   "starty": 3
  // },
  // {
  //   "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  //   "answer": "حساباتبنكية",
  //   "position": 4,
  //   "orientation": "down",
  //   "startx": 13,
  //   "starty": 3
  // },
  // {
  //   "clue": "مدينة لا تتوفر فيها خدمة سوهو فاي لاين؟",
  //   "answer": "غزة",
  //   "position": 5,
  //   "orientation": "across",
  //   "startx": 4,
  //   "starty": 4
  // },
  // {
  //   "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  //   "answer": "معارضالاتصالات",
  //   "position": 6,
  //   "orientation": "across",
  //   "startx": 6,
  //   "starty": 5
  // },
  // {
  //   "clue": "تزويدماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  //   "answer": "الاسم",
  //   "position": 7,
  //   "orientation": "down",
  //   "startx": 11,
  //   "starty": 5
  // },
  // {
  //   "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  //   "answer": "بالباي",
  //   "position": 8,
  //   "orientation": "across",
  //   "startx": 1,
  //   "starty": 6
  // },
  // {
  //   "clue": "كم المدة التي تمنح للمشترك مجاناً؟",
  //   "answer": "شهران",
  //   "position": 9,
  //   "orientation": "across",
  //   "startx": 3,
  //   "starty": 8
  // },
  // {
  //   "clue": " المعدل الزمني لتركيب خدمة فايلان سوهو؟",
  //   "answer": "عشرايام",
  //   "position": 10,
  //   "orientation": "across",
  //   "startx": 4,
  //   "starty":11
  // },
  // {
  //   "clue": "يتم دفع الفاتورة كل شهر ؟ام كل شهرين ؟",
  //   "answer": "شهر",
  //   "position": 11,
  //   "orientation": "down",
  //   "startx": 5,
  //   "starty": 11
  // },
  // {
  //   "clue": "ماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  //   "answer": "لاينكود",
  //   "position": 12,
  //   "orientation": "across",
  //   "startx": 11,
  //   "starty": 12
  // }
  // ] 