// A date is give as an integer of 6 digits. For example, the number 181019 represents October 18, 2019.

// Develop an algorithm that has such a number as input , checks that this number corresponds to a valid date and display the following result:
// Day : 18
// Month: October
// Year: 2019

const dateConverter = date => {
    let dd, mm, yy;
  
    dd = date.slice(0, 2);
    mm = date.slice(2, 4);
    yy = date.slice(4);
  
    const mDate = `20${yy}-${mm}-${dd}`;
    const now = new Date(mDate);
  
    const out = 
    `
    Day: ${now.getDate()},
    Month: ${now.toLocaleString('default', { month: 'long' })},
    Year: ${now.getFullYear()}`
  ;
  
    console.log(out);
  };
  
  dateConverter('140222');

  //A car rental organization offers two rental formulas:
  //1. Rental by the kilometer:
  // a. for the first 100 kilometers: rate r1 per km
  // b. for the kilometers from 101 to 1000: rate r2 per km
  // c. beyond 1000kilometers: rate r3 per km.

  // 2. Daily rate: Unlimited milage at the price per day p_d.

  // In both cases, it is neccessary to add an insurance (whose cost per day is ins) and the value-added tax(VAT).
  // The quantities r1, r2, r3, p_d, ins as well as the rate of VAT are considered as constants. 

  // Take for example: r1=0.7 r2=0.4 r3=0.2 p_d=100 ins=0.3(expressed in dinars) and rate VAT=0.18.

  // Write an algorithm which, given the total number of kilometers and the number of days of location, calculates the total costs of the two tariffs and indicates by a label the most suitable solution advantageous for the client

  const r1 = 0.7;
  const r2 = 0.4;
  const r3 = 0.2;
  const p_d = 100;
  const ins = 0.3;
  const VAT = 0.18;

//For rental by kilometers
  function perKilo(kilos, days) {
    if (kilos <= 100){
      let rental = Math.round(r1 * kilos + (ins * days) + VAT);
      return rental;
    } else if (kilos > 100 && kilos <=1000){
      let rental = Math.round(r2 * kilos + (ins * days) + VAT);
      return rental;
    } else {
      let rental = Math.round(r3 * kilos + (ins * days) + VAT);
      return rental;
    }
  }

// For rental by day
  function perDay(kilos, days){
    let rental = Math.round((p_d * ins * days) + VAT);
    return rental;
  }


  const perKiloVal =  perKilo(300, 3);
  const perDayVal =  perDay(300, 3);

  // console.log(perKiloVal, perDayVal);

  if (perKiloVal < perDayVal) {
    console.log(`Your best option is rental per kilometers at ${perKiloVal} dinars`);
  } else {
    console.log(`Your best option is rental per day at ${perDayVal} dinars`);
  }

