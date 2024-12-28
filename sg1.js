const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};
// 1)
// اضافھ صفه جدیدة باسم milliseconds

// 2)
// عدل على العلمية tick
// لكي تقدم الساعه ب ١ جزء من الثانية

const tick = (clock) => {
  clock.seconds = clock.seconds + 1;
  clock.minutes = clock.minutes + clock.secods / 60;
  clock.hours = clock.hours + clock.minutes / 60;
  clock.seconds = clock.seconds % 60;
  clock.minutes = clock.minutes % 60;
  clock.hours = clock.hours % 24;

  return clock;
};

/* 
3)
    انشئ عملية باسم show()
    العملية تطبع الساعه بالطريقه التاليه: 

    hours:minutes:seconds:milliseconds
*/

/*

4) اكتب عملیھ باسم setMidNigh التي تحدد الساعھ الى منتصف اللیل
5) اكتب عملیھ باسم setMidDayالتي تحدد الساعھ الى منتصف الیوم 
*/



///////////////////////////////////////


const car = {
    speed : 0 
}

/*
السیاره تستطیع ان تقوم ب ٤ عملیات :  
- تسارع speedUp والتي تزید سرعھ السیاره ب ١ ( انتبھ بان السرعھ القصوى للسیاره ھي .١٠ 
- تباطئ slowDown والتي تقلل سرعھ السیاره ب ١ ( انتبھ ان سرعھ السیاره لا یمكن ان تكون سالبھ) 
- توقف stop ) تؤثر على سرعھ السیاره لكي تتوقف )  
- عرض السرعھ الحالیھ show

*/