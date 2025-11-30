import { Question } from './types';

// Full dataset from the original prompt
export const questionBank: Question[] = [
  {id:'int_add_sub_1',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−5) + (−9) ?',options:['−14','4','−4','14'],correct:0,explanation:'Két negatív szám összege negatív: −14.'},
  {id:'int_add_sub_2',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 8 + (−3) ?',options:['5','11','−5','−11'],correct:0,explanation:'8 + (−3) = 5.'},
  {id:'int_add_sub_3',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−12) + 7 ?',correctAnswer:'-5',explanation:'−12 + 7 = −5.'},
  {id:'int_add_sub_4',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 15 − (−4) ?',correctAnswer:'19',explanation:'15 − (−4) = 19.'},
  {id:'int_add_sub_5',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: (−27) + 15 + 12 ?',options:['0','−24','−6','6'],correct:0,explanation:'−27 + 15 + 12 = 0.'},
  {id:'int_add_sub_6',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−4) + 10 ?',options:['6','−14','−6','14'],correct:0,explanation:'−4 + 10 = 6.'},
  {id:'int_add_sub_7',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: 3 − (−8) ?',options:['11','−11','5','−5'],correct:0,explanation:'3 − (−8) = 11.'},
  {id:'int_add_sub_8',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−20) + (−3) ?',correctAnswer:'-23',explanation:'Két negatív szám összege negatív, −23.'},
  {id:'int_add_sub_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:16,question:'Mennyi: (−18) − (−5) ?',correctAnswer:'-13',explanation:'−18 − (−5) = −13.'},
  {id:'int_add_sub_10',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: 7 + (−15) + 6 ?',options:['-2','2','-14','14'],correct:0,explanation:'7 − 15 + 6 = -2.'},
  {id:'int_add_sub_11',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −7 + 3 ?',options:['−4','4','10','−10'],correct:0,explanation:'−7 + 3 = −4.'},
  {id:'int_add_sub_12',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −2 − 5 ?',options:['−7','7','3','−3'],correct:0,explanation:'−2 − 5 = −7.'},
  {id:'int_add_sub_13',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −14 + 9 ?',correctAnswer:'-5',explanation:'−14 + 9 = −5.'},
  {id:'int_add_sub_14',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 12 − (−6) ?',correctAnswer:'18',explanation:'12 − (−6) = 18.'},
  {id:'int_add_sub_15',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −5 + (−5) = −10 ?',correct:true,explanation:'−5 + −5 valóban −10.'},
  {id:'int_add_sub_16',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:12,question:'Igaz vagy hamis: −3 − (−3) = 0 ?',correct:true,explanation:'−3 − (−3) = 0.'},
  {id:'int_add_sub_17',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−2 + 7':'5','−10 + 3':'−7','6 − (−4)':'10'} ,explanation:'Pozitív és negatív összeadása.'},
  {id:'int_add_sub_18',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 5 + (−8) ?',options:['−3','3','−13','13'],correct:0,explanation:'5 − 8 = −3.'},
  {id:'int_add_sub_19',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −30 + 12 ?',correctAnswer:'-18',explanation:'−30 + 12 = −18.'},
  {id:'int_add_sub_20',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: −9 − 4 ?',options:['−13','13','−5','5'],correct:0,explanation:'−9 − 4 = −13.'},
  {id:'int_add_sub_21',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −6 + 2 ?',options:['−4','4','8','−8'],correct:0,explanation:'−6 + 2 = −4.'},
  {id:'int_add_sub_24',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−3 + 4':'1','−12 + 2':'−10','7 − (−2)':'9'},explanation:'Vegyes műveletek.'},
  {id:'int_add_sub_28',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−4 + 9':'5','−7 − 2':'−9','10 − (−5)':'15'},explanation:'Vegyes előjelkezelés.'},
  {id:'int_add_sub_34',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−8 + 3':'−5','−14 + 4':'−10','9 − (−3)':'12'},explanation:'Vegyes műveletek.'},
  {id:'int_add_sub_38',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd:',pairs:{'−9 + 6':'−3','−3 − 7':'−10','4 − (−1)':'5'},explanation:'Vegyes előjelkezelés.'},
  {id:'int_add_sub_41',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −3 + (−6) ?',options:['−9','9','3','−3'],correct:0,explanation:'−3 − 6 = −9.'},
  {id:'int_add_sub_72',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −18 − (−3) = −15 ?',correct:true,explanation:'−18 + 3 = −15.'},
  {id:'int_add_sub_86',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −3 − 9 = −12 ?',correct:true,explanation:'−3 − 9 valóban −12.'},

  /* NEW QUESTIONS: Absolute Value and Opposites */
  {id:'abs_opp_1',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -15 ellentettje?',correctAnswer:'15',explanation:'Egy negatív szám ellentettje a pozitív párja.'},
  {id:'abs_opp_2',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -8 abszolút értéke?',correctAnswer:'8',explanation:'A -8 távolsága a nullától 8 egység.'},
  {id:'abs_opp_3',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi a 42 ellentettje?',options:['-42','42','0','84'],correct:0,explanation:'A pozitív szám ellentettje negatív.'},
  {id:'abs_opp_4',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi |-25| értéke?',options:['25','-25','0','50'],correct:0,explanation:'Az abszolút érték mindig nemnegatív.'},
  {id:'abs_opp_5',category:'Egész számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A -5 ellentettje 5.',correct:true,explanation:'Helyes, -(-5) = 5.'},
  {id:'abs_opp_6',category:'Egész számok',difficulty:'medium',type:'tf',time:25,points:12,question:'Igaz vagy hamis: A -7 abszolút értéke -7.',correct:false,explanation:'Hamis, az abszolút érték sosem negatív. |-7| = 7.'},
  {id:'abs_opp_7',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Párosítsd a számokat az ellentettjükkel:',pairs:{'-2':'2','5':'-5','0':'0'},explanation:'Az ellentett előjele fordított (kivéve a 0).'},
  {id:'abs_opp_8',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Számítsd ki az értékeket:',pairs:{'|-10|':'10','-(-3)':'3','-|4|':'-4'},explanation:'Abszolút érték és ellentett szabályai.'},
  {id:'abs_opp_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Mennyi: |-12| + |-3| ?',correctAnswer:'15',explanation:'12 + 3 = 15.'},
  {id:'abs_opp_10',category:'Egész számok',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik állítás igaz?',options:['|-5| = 5','|-5| = -5','-5 ellentettje -5','|5| = -5'],correct:0,explanation:'Csak az első állítás helyes.'}
];

// Helper to shuffle questions
export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = questionBank;
  if (category && category !== 'all') {
    pool = questionBank.filter(q => q.category === category);
  }
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}