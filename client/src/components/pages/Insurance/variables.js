const quoteForm = {
    vehicles: [{
        ownership_type: '',
        is_used_for_rideshare: true,
        vehicle_identification: {
          clearcover_vehicle_id: '3457d9e8-6583-4de2-b4f8-bad701864893'
        },
        vehicle_usage: '',
        vehicle_coverages: {
          comprehensive: {
            deductible_key: ''
          },
          collision: {
            waived: true
          },
          rental: {
            waived: true
          },
          rideshare: {
            waived: false
          },
          roadside: {
            waived: false
          },
          uninsured_motorist_property_damage: {
            waived: true
          }
        },
        mileage: {
          annual: '',
          total: 0
        }
    }],
    drivers: [{
        driver_information: {
          first_name: '',
          middle_name: '',
          last_name: '',
          suffix: '',
          date_of_birth: '',
          gender: '',
          marital_status: '' ,
          relationship_to_applicant: 'applicant'
        },
        contact_information:{
          email_address: ''
        },
        current_education:{
           education_level_clearcover_key: ''
        },
        exclude_from_quote: false
      }]
  }

const suffixOpts = [
  { value: 'Jr', label: 'Jr' },
  { value: 'Sr', label: 'Sr' },
  { value: 'I', label: 'I' },
  { value: 'II', label: 'II' },
  { value: 'III', label: 'III' },
  { value: 'IV', label: 'IV' },
];

const bodilyInjuryOpts = [
    { value: 'twenty_five_fifty', label: 'twenty five fifty' },
    { value: 'thirty_sixty', label: 'thirty dixty' },
    { value: 'fifty_one_hundred', label: 'fifty one hundred' },
    { value: 'one_hundred_two_hundred', label: 'one hundred two hundred' },
    { value: 'one_hundred_three_hundred', label: 'one hundred three hundred' },
    { value: 'two_fifty_five_hundred', label: 'two fifty five hundred' },
    { value: 'three_hundred_three_hundred', label: 'three hundred three hundred' },
    { value: 'three_hundred_five_hundred', label: 'three hundred five hundred' },
    { value: 'five_hundred_five_hundred', label: 'five hundred five hundred' },
    { value: 'five_hundred_seven_fifty', label: 'five hundred seven fifty' },
    { value: 'five_hundred_one_million', label: 'five hundred one million' },
    { value: 'one_million_one_million', label: 'one million one million' },
];

const propertyDamageOpts = [
    { value: 'five_thousand', label: 'five thousand' },
    { value: 'ten_thousand', label: 'ten thousand' },
    { value: 'fifteen_thousand', label: 'fifteen thousand' },
    { value: 'twenty_thousand', label: 'twenty thousand' },
    { value: 'twenty_five_thousand', label: 'twenty five thousand' },
    { value: 'fifty_thousand', label: 'fifty thousand' },
    { value: 'one_hundred_thousand', label: 'one hundred thousand' },
    { value: 'two_hundred_fifty_thousand', label: 'two hundred fifty thousand' },
    { value: 'five_hundred_thousand', label: 'five hundred thousand' }
];


const medicalPaymentsOpts = [
    { value: 'one_thousand', label: 'one thousand' },
    { value: 'two_thousand', label: 'two thousand' },
    { value: 'three_thousand', label: 'three thousand' },
    { value: 'four_thousand', label: 'four thousand' },
    { value: 'five_thousand', label: 'five thousand' },
    { value: 'seventy_five_hundred', label: 'seventy five hundred' },
    { value: 'ten_thousand', label: 'ten thousand' },
    { value: 'fifteen_thousand', label: 'fifteen thousand' },
    { value: 'twenty_five_thousand', label: 'twenty five thousand' },
];

const uninsuredMotoristBodilyInjuryOpts = [
    { value: 'twenty_five_fifty', label: 'twenty five fifty' },
    { value: 'thirty_sixty', label: 'thirty sixty' },
    { value: 'fifty_one_hundred', label: 'fifty one hundred' },
    { value: 'one_hundred_two_hundred', label: 'one hundred two hundred' },
    { value: 'one_hundred_three_hundred', label: 'one hundred three hundred' },
    { value: 'two_fifty_five_hundred', label: 'two fifty five hundred' },
    { value: 'three_hundred_three_hundred', label: 'three hundred three hundred' },
    { value: 'three_hundred_five_hundred', label: 'three hundred five hundred' },
    { value: 'five_hundred_five_hundred', label: 'five hundred five hundred' },
];

const underinsuredMotoristBodilyInjuryOpts = [
    { value: 'twenty_five_fifty', label: 'twenty five fifty' },
    { value: 'thirty_sixty', label: 'thirty sixty' },
    { value: 'fifty_one_hundred', label: 'fifty one hundred' },
    { value: 'one_hundred_two_hundred', label: 'one hundred two hundred' },
    { value: 'one_hundred_three_hundred', label: 'one hundred three hundred' },
    { value: 'two_fifty_five_hundred', label: 'two fifty five hundred' },
    { value: 'three_hundred_three_hundred', label: 'three hundred three hundred' },
    { value: 'three_hundred_five_hundred', label: 'three hundred five hundred' },
    { value: 'five_hundred_five_hundred', label: 'five hundred five hundred' },
];


const stateOpts = [
    { value: 'AK', label: 'AK' },
    { value: 'AL', label: 'AL' },
    { value: 'AR', label: 'AR' },
    { value: 'AZ', label: 'AZ' },
    { value: 'CA', label: 'CA' },
    { value: 'CO', label: 'CO' },
    { value: 'CT', label: 'CT' },
    { value: 'DC', label: 'DC' },
    { value: 'DE', label: 'DE' },
    { value: 'FL', label: 'FL' },
    { value: 'GA', label: 'GA' },
    { value: 'HI', label: 'HI' },
    { value: 'IA', label: 'IA' },
    { value: 'ID', label: 'ID' },
    { value: 'IL', label: 'IL' },
    { value: 'IN', label: 'IN' },
    { value: 'KS', label: 'KS' },
    { value: 'KY', label: 'KY' },
    { value: 'LA', label: 'LA' },
    { value: 'MA', label: 'MA' },
    { value: 'MD', label: 'MD' },
    { value: 'ME', label: 'ME' },
    { value: 'MI', label: 'MI' },
    { value: 'MN', label: 'MN' },
    { value: 'MO', label: 'MO' },
    { value: 'MS', label: 'MS' },
    { value: 'MT', label: 'MT' },
    { value: 'NC', label: 'NC' },
    { value: 'ND', label: 'ND' },
    { value: 'NE', label: 'NE' },
    { value: 'NH', label: 'NH' },
    { value: 'NJ', label: 'NJ' },
    { value: 'NM', label: 'NM' },
    { value: 'NV', label: 'NV' },
    { value: 'NY', label: 'NY' },
    { value: 'OH', label: 'OH' },
    { value: 'OK', label: 'OK' },
    { value: 'OR', label: 'OR' },
    { value: 'PA', label: 'PA' },
    { value: 'RI', label: 'RI' },
    { value: 'SC', label: 'SC' },
    { value: 'SD', label: 'SD' },
    { value: 'TN', label: 'TN' },
    { value: 'TX', label: 'TX' },
    { value: 'UT', label: 'UT' },
    { value: 'VA', label: 'VA' },
    { value: 'VT', label: 'VT' },
    { value: 'WA', label: 'WA' },
    { value: 'WI', label: 'WI' },
    { value: 'WV', label: 'WV' },
    { value: 'WY', label: 'WY' },
];


const comprehensiveOpts = [
    { value: 'zero', label: 'zero' },
    { value: 'fifty', label: 'fifty' },
    { value: 'one_hundred', label: 'one hundred' },
    { value: 'two_hundred', label: 'two hundred' },
    { value: 'two_fifty', label: 'two fifty' },
    { value: 'five_hundred', label: 'five hundred' },
    { value: 'seven_fifty', label: 'seven fifty' },
    { value: 'one_thousand', label: 'one thousand' },
    { value: 'fifteen_hundred', label: 'fifteen hundred' },
    { value: 'two_thousand', label: 'two_thousand' },
    { value: 'twenty_five_hundred', label: 'twenty_five_hundred' },
];

const collisionOpts = [
    { value: 'fifty', label: 'fifty' },
    { value: 'one_hundred', label: 'one hundred' },
    { value: 'one_fifty', label: 'one fifty' },
    { value: 'two_hundred', label: 'two hundred' },
    { value: 'two_fifty', label: 'two fifty' },
    { value: 'five_hundred', label: 'five hundred' },
    { value: 'seven_fifty', label: 'seven fifty' },
    { value: 'one_thousand', label: 'one thousand' },
    { value: 'fifteen_hundred', label: 'fifteen hundred' },
    { value: 'two_thousand', label: 'two thousand' },
    { value: 'twenty_five_hundred', label: 'twenty five hundred' },
];

const vehicleUsageOtps = [
    { value: 'pleasure', label: 'pleasure' },
    { value: 'business', label: 'business' },
    { value: 'artisan', label: 'artisan' },
    { value: 'commute', label: 'commute' },
    { value: 'farm', label: 'farm' },
];

const ownershipTypeOpts = [
    { value: 'financed', label: 'financed' },
    { value: 'leased', label: 'leased' },
    { value: 'owned', label: 'owned' },
];

const genderOpts = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
    { value: 'nonbinary', label: 'nonbinary' },
];

const maritalStatusOpts = [
    { value: 'single', label: 'single' },
    { value: 'married', label: 'married' },
    { value: 'civil_union', label: 'civil union' },
    { value: 'divorced', label: 'divorced' },
    { value: 'separated', label: 'separated' },
    { value: 'domestic_partnership', label: 'domestic partnership' },
    { value: 'widowed', label: 'widowed' },
];

const relationshipToApplicantOpts = [
    { value: 'applicant', label: 'applicant' },
    { value: 'spouse', label: 'spouse' },
    { value: 'partner', label: 'partner' },
    { value: 'significant_other', label: 'significant other' },
    { value: 'child', label: 'child' },
    { value: 'other_relative', label: 'other relative' },
    { value: 'non_relative', label: 'non relative' },
];

const currentEducationOpts = [
    { value: 'elementary', label: 'elementary' },
    { value: 'high_school', label: 'high school' },
    { value: 'associates_degree', label: 'associates degree' },
    { value: 'bachelors_degree', label: 'bachelors degree' },
    { value: 'advanced_degree', label: 'advanced degree' },
];


export {
    quoteForm,
    suffixOpts,
    bodilyInjuryOpts,
    propertyDamageOpts,
    medicalPaymentsOpts,
    uninsuredMotoristBodilyInjuryOpts,
    underinsuredMotoristBodilyInjuryOpts,
    stateOpts,
    comprehensiveOpts,
    collisionOpts,
    ownershipTypeOpts,
    vehicleUsageOtps,
    genderOpts,
    maritalStatusOpts,
    relationshipToApplicantOpts,
    currentEducationOpts
}