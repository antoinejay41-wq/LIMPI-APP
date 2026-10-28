export type Language = 'en' | 'es' | 'ht';

export interface Translations {
  // Common
  appName: string;
  tagline: string;
  subTagline: string;
  servingLehigh: string;
  back: string;
  continue: string;
  manage: string;
  cancel: string;
  save: string;
  close: string;
  done: string;
  reschedule: string;
  ecoSanitizing: string;
  sparkleGuaranteeTitle: string;
  sparkleGuaranteeDesc: string;
  threeMonthPlan: string;
  forThreeMonths: string;
  dueToday: string;

  // New Plans & Extras (Single Visit & Annual Plan)
  singleVisitTitle: string;
  singleVisitPrice: string;
  singleVisitCommitment: string;
  singleVisitDesc: string;
  singleVisitBtn: string;
  annualPlanTitle: string;
  annualPlanBadge: string;
  annualPlanPrice: string;
  annualPlanCommitment: string;
  annualPlanVisitRate: string;
  annualPlanBonusVisits: string;
  annualPlanBtn: string;
  extrasTitle: string;
  extraVisitsDesc: string;
  extraVisitsAnnualCover: string;
  extraBinsDesc: string;
  binsIncludedNote: string;
  howLimpiWorksPricingText: string;
  freeVisitsLeft: string;
  useFreeVisitBtn: string;
  bookAnotherVisitBtn: string;
  switchToAnnualPlanBtn: string;
  monthOf12: string;
  annualCommitmentEnds: string;
  singleVisitOrderSummary: string;
  annualPlanOrderSummary: string;
  extraBinsItem: string;
  extraServicesItem: string;
  agreeAnnualTermsCheckbox: string;
  agreeSingleTermsCheckbox: string;
  bonusVisitScheduled: string;
  pickMonthlyDayTitle: string;
  pickSingleDayTitle: string;
  pickMonthlyDaySubtitle: string;
  pickSingleDaySubtitle: string;

  // Tabs / Navigation
  navHome: string;
  navSchedule: string;
  navAbout: string;
  navAccount: string;

  // Screen 1: Welcome
  createAccountTab: string;
  signInTab: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  emailLabel: string;
  passwordLabel: string;
  forgotPasswordLink: string;
  createAccountBtn: string;
  signInBtn: string;
  orContinueWith: string;
  alreadyHaveAccount: string;
  newToLimpi: string;

  // Screen 1b: Forgot Password
  forgotPasswordTitle: string;
  forgotPasswordDesc: string;
  sendLinkBtn: string;
  resetLinkSentTitle: string;
  resetLinkSentDesc: string;
  backToSignIn: string;

  // Screen 2: How Limpi Works & Pricing
  howItWorksHeader: string;
  howItWorksSubtitle: string;
  howItWorksTitle: string;
  simpleAutomated: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  pricingCardTitle: string;
  pricingCardDesc: string;
  extraBinsNote: string;
  extraBinsSubnote: string;
  seePlansBtn: string;

  // Screen 3: Plan Selection
  selectPlanTitle: string;
  selectPlanSubtitle: string;
  standardPlanTitle: string;
  standardPlanDesc: string;
  frequentPlanTitle: string;
  frequentPlanDesc: string;
  extraBinsNotice: string;
  renewsNotice: string;
  numberOfBinsTitle: string;
  binsIncludedDesc: string;
  oneBin: string;
  twoBins: string;
  includedBadge: string;
  threePlusBins: string;
  perExtraBin: string;

  // Screen 4: Address
  serviceAddressTitle: string;
  serviceAddressSubtitle: string;
  streetLabel: string;
  unitLabel: string;
  cityStateLabel: string;
  zipCodeLabel: string;
  lehighOnly: string;
  zipValidMsg: string;
  zipInvalidMsg: string;
  setLehighZipBtn: string;
  gateCodeLabel: string;
  binLocationQuestion: string;
  locCurbside: string;
  locCurbsideNote: string;
  locSideLeft: string;
  locSideLeftNote: string;
  locSideRight: string;
  locSideRightNote: string;
  locGate: string;
  locGateNote: string;

  // Screen 5: Pick Your Day
  pickDayTitle: string;
  pickDaySubtitle: string;
  serviceDayLabel: string;
  matchesTrashDay: string;
  timeWindowLabel: string;
  curbsideReminderTitle: string;
  curbsideReminderDesc: string;
  morningWindow: string;
  afternoonWindow: string;

  // Screen 6: Checkout
  checkoutTitle: string;
  checkoutSubtitle: string;
  sanitizedCurbsideCare: string;
  activeBadge: string;
  expressCheckoutLabel: string;
  cardDetailsLabel: string;
  cardNumberLabel: string;
  expiryLabel: string;
  cvcLabel: string;
  zipLabel: string;
  agreeTermsCheckbox: string;
  termsWord: string;
  startMyPlanBtn: string;
  activatingPlan: string;
  cleanGuaranteeTag: string;

  // Screen 7: Confirmation
  confirmationTag: string;
  youAreAllSet: string;
  confirmationSubtitle: string;
  orderNumberLabel: string;
  receiptSentTo: string;
  firstCleanTitle: string;
  goToMyHomeBtn: string;
  viewFullScheduleBtn: string;

  // Screen 8: Home
  activeShield: string;
  yourNextCleaning: string;
  commitmentActiveNotice: string;
  cleaningOneOfThree: string;
  commitmentCycle: string;
  octUpcoming: string;
  novClean: string;
  decClean: string;
  twoServicesIncluded: string;
  service1Desc: string;
  service2Desc: string;
  renewsOnPrefix: string;
  accountOverviewTitle: string;
  viewAll: string;
  paymentMethodShort: string;
  serviceAddressShort: string;

  // Screen 9: Schedule
  cleaningRouteTitle: string;
  cleaningRouteSubtitle: string;
  upcomingVisitsTab: string;
  pastHistoryTab: string;
  confirmedRouteStatus: string;
  scheduledStatus: string;
  cleanedStatus: string;
  importantCommitmentRuleTitle: string;
  importantCommitmentRuleDesc: string;
  currentCommitmentCycle: string;
  onTrack: string;
  pauseOrSkipBtn: string;
  holdOnTitle: string;
  pauseWarningHighlight: string;
  pauseWarningDetail: string;
  keepMyVisitBtn: string;
  pauseAnywayBtn: string;

  // Screen 9b: Visit Detail
  visitDetailTitle: string;
  confirmedRouteService: string;
  rescheduleVisitBtn: string;
  selectNewServiceDay: string;
  confirmRescheduledBtn: string;
  rescheduledSuccess: string;

  // Screen 10: Account
  accountTitle: string;
  activeStatus: string;
  memberSince: string;
  totalCleansStat: string;
  nextCycleStat: string;
  currentPlanBadge: string;
  upgradePlanBtn: string;
  downgradePlanBtn: string;
  changeBinsBtn: string;
  cancelPlanBtn: string;
  cancelTooltipText: string;
  accountSettingsHeader: string;
  paymentMethodRow: string;
  addressRow: string;
  helpRow: string;
  helpRowDesc: string;
  logOutRow: string;
  logOutModalTitle: string;
  logOutModalDesc: string;
  logOutConfirmBtn: string;
  cancelBtn: string;

  // Help & Contact
  helpModalTitle: string;
  messageUsBtn: string;
  callUsBtn: string;
  dispatchHoursTitle: string;
  monFriHours: string;
  satHours: string;
  sunHours: string;

  // Extra Screen Labels
  orderConfirmedTitle: string;
  paidBadge: string;
  firstScheduledCleaning: string;
  updatePaymentTitle: string;
  primaryCardOnFile: string;
  autoPayActiveBadge: string;
  savePaymentBtn: string;
  cardSavedMsg: string;
  editServiceAddressTitle: string;
  editServiceAddressDesc: string;
  saveAddressBtn: string;
  addressUpdatedMsg: string;
  howCanWeHelpTitle: string;
  dispatchBasedLehigh: string;
  sendMessageToDispatch: string;
  sendMessageBtn: string;
  messageSentSuccess: string;
  notificationsTitle: string;
  recentUpdates: string;
  markAllRead: string;
  smsArrivalAlert: string;

  // Screen: About Us
  aboutLimpiLink: string;
  aboutLimpiTitle: string;
  aboutOurMissionTitle: string;
  aboutOurMissionText: string;
  aboutWhatWeDoTitle: string;
  aboutWhatWeDoText: string;
  aboutOurPromiseTitle: string;
  aboutPromiseEasyBooking: string;
  aboutPromiseEasyBookingDesc: string;
  aboutPromiseReliable: string;
  aboutPromiseReliableDesc: string;
  aboutPromiseEco: string;
  aboutPromiseEcoDesc: string;
  aboutGivingBackTitle: string;
  aboutGivingBackText: string;
  aboutServingLehighTitle: string;
  aboutServingLehighText: string;
  aboutBookVisitBtn: string;
  aboutCommunityPhotoCaption: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appName: 'Limpi',
    tagline: 'Clean Bins. Healthy Home.',
    subTagline: 'Curbside bin sanitizing & trash cleanup in Lehigh Acres',
    servingLehigh: 'Serving Lehigh Acres, FL',
    back: 'Back',
    continue: 'Continue',
    manage: 'Manage',
    cancel: 'Cancel',
    save: 'Save',
    close: 'Close',
    done: 'Done',
    reschedule: 'Reschedule',
    ecoSanitizing: 'Eco-Friendly Sanitizing',
    sparkleGuaranteeTitle: '100% Sparkle Guarantee',
    sparkleGuaranteeDesc: 'Odor-free, sparkling clean results guaranteed every visit.',
    threeMonthPlan: 'Plan',
    forThreeMonths: '',
    dueToday: 'Due Today',

    // New Plans & Extras
    singleVisitTitle: 'Single Visit',
    singleVisitPrice: '$19.99 per visit',
    singleVisitCommitment: 'No commitment',
    singleVisitDesc: 'Choose the day you want your service, every time.',
    singleVisitBtn: 'Book a Visit',
    annualPlanTitle: 'Annual Plan',
    annualPlanBadge: 'Best Value',
    annualPlanPrice: '$239.99 for 1 year',
    annualPlanCommitment: '1-year commitment',
    annualPlanVisitRate: '1 cleaning visit every month',
    annualPlanBonusVisits: 'Plus 5 FREE bonus visits to schedule whenever you want (17 visits in total)',
    annualPlanBtn: 'Start Annual Plan',
    extrasTitle: 'Extras',
    extraVisitsDesc: 'Extra visits in the same month (2 or more services per month): $10 per extra service.',
    extraVisitsAnnualCover: 'Annual Plan members: use your 5 free bonus visits to cover extra services.',
    extraBinsDesc: '3 or more bins: $10 extra per bin.',
    binsIncludedNote: 'Includes up to 2 bins.',
    howLimpiWorksPricingText: 'Single visit $19.99, no commitment. Annual plan $239.99 for 1 year with 5 free visits.',
    freeVisitsLeft: 'Free visits left',
    useFreeVisitBtn: 'Use a free visit',
    bookAnotherVisitBtn: 'Book another visit',
    switchToAnnualPlanBtn: 'Switch to Annual Plan',
    monthOf12: 'Month 2 of 12',
    annualCommitmentEnds: 'Annual commitment ends',
    singleVisitOrderSummary: 'Single Visit',
    annualPlanOrderSummary: 'Annual Plan (1 year • 17 visits total)',
    extraBinsItem: 'Extra bin(s) ($10 each)',
    extraServicesItem: 'Extra service(s) ($10 each)',
    agreeAnnualTermsCheckbox: 'I agree to the 1-year annual plan and automatic annual renewal according to the',
    agreeSingleTermsCheckbox: 'I agree to the single visit service booking according to the',
    bonusVisitScheduled: 'Bonus visit scheduled successfully!',
    pickMonthlyDayTitle: 'Pick Your Monthly Cleaning Day',
    pickSingleDayTitle: 'Pick Your Service Day',
    pickMonthlyDaySubtitle: 'Annual Plan includes 1 visit every month. Pick your recurring weekday.',
    pickSingleDaySubtitle: 'Choose the day you want your service, every time.',

    navHome: 'Home',
    navSchedule: 'Schedule',
    navAbout: 'About Us',
    navAccount: 'Account',

    createAccountTab: 'Create Account',
    signInTab: 'Sign In',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'First & last name',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    passwordLabel: 'Password',
    forgotPasswordLink: 'Forgot password?',
    createAccountBtn: 'Create Account',
    signInBtn: 'Sign In',
    orContinueWith: 'or continue with',
    alreadyHaveAccount: 'Already have an account?',
    newToLimpi: 'New to Limpi?',

    forgotPasswordTitle: 'Forgot Password?',
    forgotPasswordDesc: "Enter your account email address and we'll send you a secure link to reset your password.",
    sendLinkBtn: 'Send link',
    resetLinkSentTitle: 'Reset Link Sent!',
    resetLinkSentDesc: "We've emailed instructions to reset your password. Follow the link to regain access to Limpi.",
    backToSignIn: 'Back to Sign In',

    howItWorksHeader: 'How Limpi Works & Pricing',
    howItWorksSubtitle: 'Professional curbside cleaning and UV sanitization in 3 easy steps.',
    howItWorksTitle: 'How It Works',
    simpleAutomated: 'Simple & Automated',
    step1Title: 'Pick your plan',
    step1Desc: 'Choose Single Visit ($19.99) or Annual Plan ($239.99 for 1 year with 5 free visits). Includes up to 2 bins.',
    step2Title: 'We clean at your curb',
    step2Desc: 'Bins are washed and UV-sanitized at your curb, and the trash area around them is cleaned up.',
    step3Title: 'Enjoy a fresh bin',
    step3Desc: 'Clean, odorless, and sanitized bins every single time.',
    pricingCardTitle: 'Single visit $19.99, no commitment. Annual plan $239.99 for 1 year with 5 free visits.',
    pricingCardDesc: 'Includes up to 2 bins washed and UV-sanitized at your curb with clean trash area.',
    extraBinsNote: '3 or more bins: $10 extra per bin.',
    extraBinsSubnote: 'Includes up to 2 bins. Extra services in same month: $10.',
    seePlansBtn: 'See Plans',

    selectPlanTitle: 'Select Your Plan',
    selectPlanSubtitle: 'Single visit or annual plan with 5 bonus visits.',
    standardPlanTitle: 'Single Visit',
    standardPlanDesc: 'Choose the day you want your service, every time. No commitment.',
    frequentPlanTitle: 'Annual Plan',
    frequentPlanDesc: '1-year commitment. 1 cleaning visit every month plus 5 FREE bonus visits (17 visits in total).',
    extraBinsNotice: 'Includes up to 2 bins. 3 or more bins: $10 extra per bin.',
    renewsNotice: 'Extra visits in the same month: $10 each. Annual members can use their 5 free visits to cover extra services.',
    numberOfBinsTitle: 'Number of Bins',
    binsIncludedDesc: 'Up to 2 bins included in your plan',
    oneBin: '1 Bin',
    twoBins: '2 Bins',
    includedBadge: 'Included',
    threePlusBins: '3+ Bins',
    perExtraBin: '+$10 each',

    serviceAddressTitle: 'Service Address & Bins',
    serviceAddressSubtitle: 'Limpi serves residential homes in Lehigh Acres, FL.',
    streetLabel: 'Street Address',
    unitLabel: 'Apt / Unit (Optional)',
    cityStateLabel: 'City & State',
    zipCodeLabel: 'ZIP Code (Service Area Check)',
    lehighOnly: 'Lehigh Acres Only',
    zipValidMsg: 'We serve this address in Lehigh Acres, FL!',
    zipInvalidMsg: 'Limpi currently operates exclusively in Lehigh Acres, FL (ZIP codes: 33936, 33971, 33972, 33973, 33974, 33976).',
    setLehighZipBtn: 'Click to set Lehigh Acres ZIP (33936)',
    gateCodeLabel: 'Gate Code or Access Instructions (Optional)',
    binLocationQuestion: 'Where are your bins located?',
    locCurbside: 'Curbside / End of Driveway',
    locCurbsideNote: 'Recommended for fastest pickup',
    locSideLeft: 'Side of House (Left)',
    locSideLeftNote: 'Accessible from front yard',
    locSideRight: 'Side of House (Right)',
    locSideRightNote: 'Accessible from front yard',
    locGate: 'Behind Front Gate',
    locGateNote: 'Provide gate code below',

    pickDayTitle: 'Pick Your Cleaning Day',
    pickDaySubtitle: 'Choose your preferred day and time window for curbside service in Lehigh Acres.',
    serviceDayLabel: 'Service Day',
    matchesTrashDay: 'Matches your trash day',
    timeWindowLabel: 'Time Window',
    curbsideReminderTitle: 'Curbside Reminder',
    curbsideReminderDesc: 'Leave bins on street curb by 7:00 AM on service morning. Our mobile sanitizing unit will clean and replace them neatly.',
    morningWindow: 'Morning Window (7:30 AM – 11:30 AM)',
    afternoonWindow: 'Afternoon Window (12:00 PM – 4:00 PM)',

    checkoutTitle: 'Review & Start Plan',
    checkoutSubtitle: 'Confirm your details to activate curbside cleaning in Lehigh Acres.',
    sanitizedCurbsideCare: 'Sanitized Curbside Care',
    activeBadge: 'Active',
    expressCheckoutLabel: 'Express Checkout',
    cardDetailsLabel: 'Card Details',
    cardNumberLabel: 'Card Number',
    expiryLabel: 'MM / YY',
    cvcLabel: 'CVC',
    zipLabel: 'ZIP Code',
    agreeTermsCheckbox: 'I agree to the plan terms, automatic renewal (for annual plan), and',
    termsWord: 'Terms',
    startMyPlanBtn: 'Start My Plan',
    activatingPlan: 'Activating Plan...',
    cleanGuaranteeTag: '100% Eco-friendly hot water wash • UV-Sanitized & Deodorized',

    confirmationTag: 'Service Confirmed',
    youAreAllSet: "You're All Set!",
    confirmationSubtitle: 'Your service is confirmed. Our mobile wash unit will roll out to your curb on service morning!',
    orderNumberLabel: 'Order #LM-89240',
    receiptSentTo: 'Receipt sent to your email',
    firstCleanTitle: 'First Scheduled Cleaning',
    goToMyHomeBtn: 'Go to my home',
    viewFullScheduleBtn: 'View Full Cleaning Schedule',

    activeShield: 'Active Shield',
    yourNextCleaning: 'Your Next Cleaning',
    commitmentActiveNotice: 'Annual Plan Active',
    cleaningOneOfThree: 'Annual Plan Progress',
    commitmentCycle: '1-Year Annual Plan',
    octUpcoming: 'Oct 24 (Upcoming)',
    novClean: 'Nov Clean',
    decClean: 'Dec Clean',
    twoServicesIncluded: '2 Services Performed at Your Curb:',
    service1Desc: '1. Trash bins washed, steamed at 190°F & UV-sanitized',
    service2Desc: '2. Garbage & debris cleaned up around your curbside trash area',
    renewsOnPrefix: 'Your plan renews on',
    accountOverviewTitle: 'Account Overview',
    viewAll: 'View All',
    paymentMethodShort: 'Payment Method',
    serviceAddressShort: 'Service Address',

    cleaningRouteTitle: 'Cleaning Route & Visits',
    cleaningRouteSubtitle: 'Residential curbside sanitation in Lehigh Acres',
    upcomingVisitsTab: 'Upcoming Visits',
    pastHistoryTab: 'Past History',
    confirmedRouteStatus: 'Confirmed Route',
    scheduledStatus: 'Scheduled',
    cleanedStatus: 'Cleaned',
    importantCommitmentRuleTitle: 'Annual Membership Perks',
    importantCommitmentRuleDesc: 'Annual Plan includes 1 monthly visit plus 5 free bonus visits to use anytime.',
    currentCommitmentCycle: 'Annual Membership',
    onTrack: 'Month 2 of 12',
    pauseOrSkipBtn: 'Manage Visit or Skip',
    holdOnTitle: 'Hold On a Second!',
    pauseWarningHighlight: 'You can reschedule your visit anytime without penalty.',
    pauseWarningDetail: 'Annual members enjoy complimentary rescheduling and 5 bonus visits.',
    keepMyVisitBtn: 'Keep My Visit',
    pauseAnywayBtn: 'Reschedule Visit',

    visitDetailTitle: 'Visit Details',
    confirmedRouteService: 'Confirmed Route Service',
    rescheduleVisitBtn: 'Reschedule Visit',
    selectNewServiceDay: 'Select New Service Day',
    confirmRescheduledBtn: 'Confirm Rescheduled Date',
    rescheduledSuccess: '✓ Rescheduled successfully!',

    accountTitle: 'Account',
    activeStatus: 'ACTIVE',
    memberSince: 'Member since Sept 2023',
    totalCleansStat: 'Total Cleans',
    nextCycleStat: 'Next Cycle',
    currentPlanBadge: 'Current Plan',
    upgradePlanBtn: 'Upgrade Plan',
    downgradePlanBtn: 'Downgrade Plan',
    changeBinsBtn: 'Change Bins',
    cancelPlanBtn: 'Cancel Plan',
    cancelTooltipText: 'Active annual commitment ends Oct 24, 2025',
    accountSettingsHeader: 'Account Settings & Preferences',
    paymentMethodRow: 'Payment Method',
    addressRow: 'Address',
    helpRow: 'Help',
    helpRowDesc: 'Contact Lehigh Acres roadside dispatch & care',
    logOutRow: 'Log Out',
    logOutModalTitle: 'Log out of Limpi?',
    logOutModalDesc: 'You will be returned to the Welcome screen. Your active scheduled route will continue without interruption.',
    logOutConfirmBtn: 'Log Out',
    cancelBtn: 'Cancel',

    helpModalTitle: 'Limpi Customer Care',
    messageUsBtn: 'Message Us',
    callUsBtn: 'Call Us',
    dispatchHoursTitle: 'Lehigh Acres Dispatch Hours',
    monFriHours: 'Monday – Friday: 7:00 AM – 5:00 PM',
    satHours: 'Saturday (Overflow): 8:00 AM – 1:00 PM',
    sunHours: 'Sunday: Closed (Truck Maintenance)',

    orderConfirmedTitle: 'Order Confirmed',
    paidBadge: 'Paid',
    firstScheduledCleaning: 'First Scheduled Cleaning',
    updatePaymentTitle: 'Update Payment Card',
    primaryCardOnFile: 'Primary Card On File',
    autoPayActiveBadge: 'AUTO-PAY ACTIVE',
    savePaymentBtn: 'Save Payment Method',
    cardSavedMsg: 'Card Saved Successfully!',
    editServiceAddressTitle: 'Edit Service Address',
    editServiceAddressDesc: 'Ensure your curb location and gate instructions are up to date for our mobile wash unit.',
    saveAddressBtn: 'Save Address',
    addressUpdatedMsg: 'Address Updated!',
    howCanWeHelpTitle: 'How can we help?',
    dispatchBasedLehigh: 'Our local dispatch team is based right here in Lehigh Acres, Florida.',
    sendMessageToDispatch: 'Send a Message to Dispatch',
    sendMessageBtn: 'Send Message',
    messageSentSuccess: 'Message received! Dispatch will reply shortly.',
    notificationsTitle: 'Notifications',
    recentUpdates: 'Recent Updates',
    markAllRead: 'Mark all read',
    smsArrivalAlert: 'Automated SMS & email arrival alerts are sent 15 minutes before our wash unit arrives at your curb.',
    aboutLimpiLink: 'About Limpi',
    aboutLimpiTitle: 'About Limpi',
    aboutOurMissionTitle: 'Our Mission',
    aboutOurMissionText: 'To make homes in Lehigh Acres cleaner, healthier, and more pleasant by making trash bin cleaning simple, reliable, and kind to the environment.',
    aboutWhatWeDoTitle: 'What We Do',
    aboutWhatWeDoText: 'Limpi cleans and sanitizes your trash bins and the garbage area at your curb, so your home stays fresh and free of odors and pests. Book from your phone, choose your day, and we take care of the rest.',
    aboutOurPromiseTitle: 'Our Promise',
    aboutPromiseEasyBooking: 'Easy booking',
    aboutPromiseEasyBookingDesc: 'Book from your phone in under two minutes with flexible dates.',
    aboutPromiseReliable: 'Reliable service',
    aboutPromiseReliableDesc: 'Consistent, professional curbside sanitization you can count on.',
    aboutPromiseEco: 'Eco-conscious cleaning',
    aboutPromiseEcoDesc: 'High-heat washing with eco-friendly sanitizers that protect Florida waters.',
    aboutGivingBackTitle: 'Giving Back',
    aboutGivingBackText: 'Our community and our planet matter to us. Limpi donates to eco-friendly foundations that fight climate change and protect the environment. Every client who cleans with Limpi helps support a cleaner future.',
    aboutServingLehighTitle: 'Serving Lehigh Acres',
    aboutServingLehighText: 'Proudly serving Lehigh Acres, Florida.',
    aboutBookVisitBtn: 'Book a Visit',
    aboutCommunityPhotoCaption: 'Clean homes, green community • Lehigh Acres, Florida',
  },

  es: {
    appName: 'Limpi',
    tagline: 'Botes Limpios. Hogar Saludable.',
    subTagline: 'Desinfección de botes y limpieza de basura en Lehigh Acres',
    servingLehigh: 'Sirviendo en Lehigh Acres, FL',
    back: 'Atrás',
    continue: 'Continuar',
    manage: 'Administrar',
    cancel: 'Cancelar',
    save: 'Guardar',
    close: 'Cerrar',
    done: 'Listo',
    reschedule: 'Reprogramar',
    ecoSanitizing: 'Desinfección Ecológica',
    sparkleGuaranteeTitle: 'Garantía 100% Impecable',
    sparkleGuaranteeDesc: 'Resultados relucientes y sin olores garantizados en cada visita.',
    threeMonthPlan: 'Plan',
    forThreeMonths: '',
    dueToday: 'Total Hoy',

    // New Plans & Extras
    singleVisitTitle: 'Visita Individual',
    singleVisitPrice: '$19.99 por visita',
    singleVisitCommitment: 'Sin compromiso',
    singleVisitDesc: 'Elija el día que desea su servicio, cada vez.',
    singleVisitBtn: 'Reservar una Visita',
    annualPlanTitle: 'Plan Anual',
    annualPlanBadge: 'Mejor Valor',
    annualPlanPrice: '$239.99 por 1 año',
    annualPlanCommitment: 'Compromiso de 1 año',
    annualPlanVisitRate: '1 visita de limpieza cada mes',
    annualPlanBonusVisits: 'Más 5 visitas de regalo GRATIS para programar cuando quieras (17 visitas en total)',
    annualPlanBtn: 'Comenzar Plan Anual',
    extrasTitle: 'Extras',
    extraVisitsDesc: 'Visitas adicionales en el mismo mes (2 o más servicios por mes): $10 por servicio adicional.',
    extraVisitsAnnualCover: 'Miembros del Plan Anual: use sus 5 visitas de regalo gratis para cubrir servicios adicionales.',
    extraBinsDesc: '3 o más botes: $10 extra por bote.',
    binsIncludedNote: 'Incluye hasta 2 botes.',
    howLimpiWorksPricingText: 'Visita individual $19.99, sin compromiso. Plan anual $239.99 por 1 año con 5 visitas gratis.',
    freeVisitsLeft: 'Visitas gratis restantes',
    useFreeVisitBtn: 'Usar una visita gratis',
    bookAnotherVisitBtn: 'Reservar otra visita',
    switchToAnnualPlanBtn: 'Cambiar a Plan Anual',
    monthOf12: 'Mes 2 de 12',
    annualCommitmentEnds: 'Renovación del plan anual',
    singleVisitOrderSummary: 'Visita Individual',
    annualPlanOrderSummary: 'Plan Anual (1 año • 17 visitas en total)',
    extraBinsItem: 'Bote(s) adicional(es) ($10 c/u)',
    extraServicesItem: 'Servicio(s) adicional(es) ($10 c/u)',
    agreeAnnualTermsCheckbox: 'Acepto el plan anual de 1 año y la renovación automática anual según los',
    agreeSingleTermsCheckbox: 'Acepto la reserva de servicio de visita individual según los',
    bonusVisitScheduled: '¡Visita de regalo programada con éxito!',
    pickMonthlyDayTitle: 'Elija su Día de Limpieza Mensual',
    pickSingleDayTitle: 'Elija el Día de su Servicio',
    pickMonthlyDaySubtitle: 'El Plan Anual incluye 1 visita cada mes. Elija su día recurrente.',
    pickSingleDaySubtitle: 'Elija el día que desea su servicio, cada vez.',

    navHome: 'Inicio',
    navSchedule: 'Horario',
    navAbout: 'Nosotros',
    navAccount: 'Cuenta',

    createAccountTab: 'Crear Cuenta',
    signInTab: 'Iniciar Sesión',
    fullNameLabel: 'Nombre Completo',
    fullNamePlaceholder: 'Nombre y apellido',
    phoneLabel: 'Número de Teléfono',
    emailLabel: 'Correo Electrónico',
    passwordLabel: 'Contraseña',
    forgotPasswordLink: '¿Olvidó su contraseña?',
    createAccountBtn: 'Crear Cuenta',
    signInBtn: 'Iniciar Sesión',
    orContinueWith: 'o continuar con',
    alreadyHaveAccount: '¿Ya tiene una cuenta?',
    newToLimpi: '¿Nuevo en Limpi?',

    forgotPasswordTitle: '¿Olvidó su contraseña?',
    forgotPasswordDesc: 'Ingrese el correo de su cuenta y le enviaremos un enlace seguro para restablecer su contraseña.',
    sendLinkBtn: 'Enviar enlace',
    resetLinkSentTitle: '¡Enlace Enviado!',
    resetLinkSentDesc: 'Hemos enviado instrucciones a su correo. Siga el enlace para restablecer su acceso a Limpi.',
    backToSignIn: 'Volver a Iniciar Sesión',

    howItWorksHeader: 'Cómo Funciona Limpi y Precios',
    howItWorksSubtitle: 'Limpieza profesional y desinfección UV en 3 sencillos pasos.',
    howItWorksTitle: 'Cómo Funciona',
    simpleAutomated: 'Simple y Automatizado',
    step1Title: 'Elige tu plan',
    step1Desc: 'Elija Visita Individual ($19.99) o Plan Anual ($239.99 por 1 año con 5 visitas gratis). Incluye hasta 2 botes.',
    step2Title: 'Limpiamos en tu acera',
    step2Desc: 'Lavamos y desinfectamos con luz UV en tu acera y limpiamos la zona de basura alrededor.',
    step3Title: 'Disfruta un bote fresco',
    step3Desc: 'Botes limpios, sin olores y esterilizados siempre.',
    pricingCardTitle: 'Visita individual $19.99, sin compromiso. Plan anual $239.99 por 1 año con 5 visitas gratis.',
    pricingCardDesc: 'Incluye hasta 2 botes lavados y desinfectados con UV en su acera con área de basura limpia.',
    extraBinsNote: '3 o más botes: $10 extra por bote.',
    extraBinsSubnote: 'Incluye hasta 2 botes. Servicios adicionales en el mismo mes: $10.',
    seePlansBtn: 'Ver Planes',

    selectPlanTitle: 'Seleccione Su Plan',
    selectPlanSubtitle: 'Visita individual o plan anual con 5 visitas de regalo.',
    standardPlanTitle: 'Visita Individual',
    standardPlanDesc: 'Elija el día que desea su servicio, cada vez. Sin compromiso.',
    frequentPlanTitle: 'Plan Anual',
    frequentPlanDesc: 'Compromiso de 1 año. 1 visita cada mes más 5 visitas de regalo GRATIS (17 visitas en total).',
    extraBinsNotice: 'Incluye hasta 2 botes. 3 o más botes: $10 extra por bote.',
    renewsNotice: 'Visitas adicionales en el mismo mes: $10 c/u. Los miembros anuales pueden usar sus 5 visitas gratis.',
    numberOfBinsTitle: 'Cantidad de Botes',
    binsIncludedDesc: 'Hasta 2 botes incluidos en su plan',
    oneBin: '1 Bote',
    twoBins: '2 Botes',
    includedBadge: 'Incluido',
    threePlusBins: '3+ Botes',
    perExtraBin: '+$10 c/u',

    serviceAddressTitle: 'Dirección de Servicio y Botes',
    serviceAddressSubtitle: 'Limpi atiende hogares residenciales en Lehigh Acres, FL.',
    streetLabel: 'Dirección',
    unitLabel: 'Apto / Unidad (Opcional)',
    cityStateLabel: 'Ciudad y Estado',
    zipCodeLabel: 'Código Postal (Verificación de Zona)',
    lehighOnly: 'Solo Lehigh Acres',
    zipValidMsg: '¡Atendemos esta dirección en Lehigh Acres, FL!',
    zipInvalidMsg: 'Limpi opera exclusivamente en Lehigh Acres, FL (Códigos: 33936, 33971, 33972, 33973, 33974, 33976).',
    setLehighZipBtn: 'Asignar código postal de Lehigh Acres (33936)',
    gateCodeLabel: 'Código de portón o acceso (Opcional)',
    binLocationQuestion: '¿Dónde se encuentran sus botes?',
    locCurbside: 'Acera / Final de la entrada',
    locCurbsideNote: 'Recomendado para recolección rápida',
    locSideLeft: 'Costado de la casa (Izquierda)',
    locSideLeftNote: 'Accesible desde el patio delantero',
    locSideRight: 'Costado de la casa (Derecha)',
    locSideRightNote: 'Accesible desde el patio delantero',
    locGate: 'Detrás del portón delantero',
    locGateNote: 'Proporcione el código abajo',

    pickDayTitle: 'Elija su Día de Limpieza',
    pickDaySubtitle: 'Elija su día preferido y ventana de horario para el servicio en Lehigh Acres.',
    serviceDayLabel: 'Día de Servicio',
    matchesTrashDay: 'Coincide con su día de basura',
    timeWindowLabel: 'Ventana de Horario',
    curbsideReminderTitle: 'Recordatorio de Acera',
    curbsideReminderDesc: 'Deje los botes en la acera antes de las 7:00 AM en la mañana del servicio. Nuestra unidad móvil los lavará y colocará ordenadamente.',
    morningWindow: 'Ventana Matutina (7:30 AM – 11:30 AM)',
    afternoonWindow: 'Ventana Vespertina (12:00 PM – 4:00 PM)',

    checkoutTitle: 'Revisar y Activar Plan',
    checkoutSubtitle: 'Confirme sus datos para activar la limpieza en Lehigh Acres.',
    sanitizedCurbsideCare: 'Cuidado y Desinfección en Acera',
    activeBadge: 'Activo',
    expressCheckoutLabel: 'Pago Rápido',
    cardDetailsLabel: 'Datos de la Tarjeta',
    cardNumberLabel: 'Número de Tarjeta',
    expiryLabel: 'MM / AA',
    cvcLabel: 'CVC',
    zipLabel: 'Código Postal',
    agreeTermsCheckbox: 'Acepto los términos del plan, renovación automática (para plan anual) y los',
    termsWord: 'Términos',
    startMyPlanBtn: 'Iniciar Mi Plan',
    activatingPlan: 'Activando Plan...',
    cleanGuaranteeTag: '100% Lavado con agua caliente ecológica • Desinfección UV y Desodorizado',

    confirmationTag: 'Servicio Confirmado',
    youAreAllSet: '¡Todo Listo!',
    confirmationSubtitle: 'Su servicio está confirmado. ¡Nuestro equipo móvil pasará por su acera el día de servicio!',
    orderNumberLabel: 'Orden #LM-89240',
    receiptSentTo: 'Recibo enviado a su correo',
    firstCleanTitle: 'Primera Limpieza Programada',
    goToMyHomeBtn: 'Ir a mi inicio',
    viewFullScheduleBtn: 'Ver Calendario Completo',

    activeShield: 'Escudo Activo',
    yourNextCleaning: 'Su Próxima Limpieza',
    commitmentActiveNotice: 'Plan Anual Activo',
    cleaningOneOfThree: 'Progreso del Plan Anual',
    commitmentCycle: 'Plan Anual de 1 Año',
    octUpcoming: 'Oct 24 (Próxima)',
    novClean: 'Limpieza Nov',
    decClean: 'Limpieza Dic',
    twoServicesIncluded: '2 Servicios Realizados en su Acera:',
    service1Desc: '1. Botes lavados a 190°F y desinfectados con UV',
    service2Desc: '2. Limpieza de basura y residuos alrededor de los botes',
    renewsOnPrefix: 'Su plan se renueva el',
    accountOverviewTitle: 'Resumen de Cuenta',
    viewAll: 'Ver Todo',
    paymentMethodShort: 'Método de Pago',
    serviceAddressShort: 'Dirección del Servicio',

    cleaningRouteTitle: 'Ruta y Visitas de Limpieza',
    cleaningRouteSubtitle: 'Saneamiento residencial en acera en Lehigh Acres',
    upcomingVisitsTab: 'Próximas Visitas',
    pastHistoryTab: 'Historial Pasado',
    confirmedRouteStatus: 'Ruta Confirmada',
    scheduledStatus: 'Programado',
    cleanedStatus: 'Limpio',
    importantCommitmentRuleTitle: 'Beneficios de Membresía Anual',
    importantCommitmentRuleDesc: 'El Plan Anual incluye 1 visita mensual más 5 visitas de regalo gratis para usar cuando desee.',
    currentCommitmentCycle: 'Membresía Anual',
    onTrack: 'Mes 2 de 12',
    pauseOrSkipBtn: 'Administrar Visita o Saltar',
    holdOnTitle: '¡Espere un momento!',
    pauseWarningHighlight: 'Puede reprogramar su visita en cualquier momento sin penalidad.',
    pauseWarningDetail: 'Los miembros anuales disfrutan de reprogramación gratuita y 5 visitas adicionales de regalo.',
    keepMyVisitBtn: 'Mantener Mi Visita',
    pauseAnywayBtn: 'Reprogramar Visita',

    visitDetailTitle: 'Detalles de la Visita',
    confirmedRouteService: 'Servicio de Ruta Confirmado',
    rescheduleVisitBtn: 'Reprogramar Visita',
    selectNewServiceDay: 'Seleccionar Nuevo Día',
    confirmRescheduledBtn: 'Confirmar Nueva Fecha',
    rescheduledSuccess: '✓ ¡Reprogramado exitosamente!',

    accountTitle: 'Cuenta',
    activeStatus: 'ACTIVO',
    memberSince: 'Miembro desde Sept 2023',
    totalCleansStat: 'Limpiezas Totales',
    nextCycleStat: 'Próximo Ciclo',
    currentPlanBadge: 'Plan Actual',
    upgradePlanBtn: 'Mejorar Plan',
    downgradePlanBtn: 'Cambiar Plan',
    changeBinsBtn: 'Cambiar Botes',
    cancelPlanBtn: 'Cancelar Plan',
    cancelTooltipText: 'Compromiso anual activo finaliza el 24 de oct de 2025',
    accountSettingsHeader: 'Ajustes y Preferencias de Cuenta',
    paymentMethodRow: 'Método de Pago',
    addressRow: 'Dirección',
    helpRow: 'Ayuda',
    helpRowDesc: 'Contacto con despacho y atención en Lehigh Acres',
    logOutRow: 'Cerrar Sesión',
    logOutModalTitle: '¿Cerrar sesión en Limpi?',
    logOutModalDesc: 'Regresará a la pantalla de bienvenida. Sus limpiezas programadas continuarán activas.',
    logOutConfirmBtn: 'Cerrar Sesión',
    cancelBtn: 'Cancelar',

    helpModalTitle: 'Atención al Cliente Limpi',
    messageUsBtn: 'Enviar Mensaje',
    callUsBtn: 'Llamar',
    dispatchHoursTitle: 'Horarios de Despacho en Lehigh Acres',
    monFriHours: 'Lunes – Viernes: 7:00 AM – 5:00 PM',
    satHours: 'Sábado (Apoyo): 8:00 AM – 1:00 PM',
    sunHours: 'Domingo: Cerrado (Mantenimiento)',

    orderConfirmedTitle: 'Pedido Confirmado',
    paidBadge: 'Pagado',
    firstScheduledCleaning: 'Primera Limpieza Programada',
    updatePaymentTitle: 'Actualizar Tarjeta de Pago',
    primaryCardOnFile: 'Tarjeta Principal Registrada',
    autoPayActiveBadge: 'PAGO AUTOMÁTICO ACTIVO',
    savePaymentBtn: 'Guardar Método de Pago',
    cardSavedMsg: '¡Tarjeta Guardada Exitosamente!',
    editServiceAddressTitle: 'Editar Dirección de Servicio',
    editServiceAddressDesc: 'Asegure que la ubicación de sus botes e instrucciones de portón estén al día para nuestra unidad móvil.',
    saveAddressBtn: 'Guardar Dirección',
    addressUpdatedMsg: '¡Dirección Actualizada!',
    howCanWeHelpTitle: '¿Cómo podemos ayudarle?',
    dispatchBasedLehigh: 'Nuestro equipo local de despacho está ubicado aquí en Lehigh Acres, Florida.',
    sendMessageToDispatch: 'Enviar un Mensaje al Despacho',
    sendMessageBtn: 'Enviar Mensaje',
    messageSentSuccess: '¡Mensaje recibido! El despacho responderá pronto.',
    notificationsTitle: 'Notificaciones',
    recentUpdates: 'Actualizaciones Recientes',
    markAllRead: 'Marcar todo leído',
    smsArrivalAlert: 'Se envían alertas automáticas por SMS y correo 15 minutos antes de que el camión de lavado llegue a su acera.',
    aboutLimpiLink: 'Sobre Limpi',
    aboutLimpiTitle: 'Sobre Limpi',
    aboutOurMissionTitle: 'Nuestra Misión',
    aboutOurMissionText: 'Hacer que los hogares en Lehigh Acres sean más limpios, saludables y agradables haciendo que la limpieza de botes de basura sea simple, confiable y respetuosa con el medio ambiente.',
    aboutWhatWeDoTitle: 'Lo Que Hacemos',
    aboutWhatWeDoText: 'Limpi limpia y desinfecta sus botes de basura y el área de recolección en su acera, para que su hogar se mantenga fresco y libre de olores y plagas. Reserve desde su teléfono, elija su día y nosotros nos encargamos del resto.',
    aboutOurPromiseTitle: 'Nuestra Promesa',
    aboutPromiseEasyBooking: 'Reserva fácil',
    aboutPromiseEasyBookingDesc: 'Reserve desde su teléfono en menos de dos minutos con fechas flexibles.',
    aboutPromiseReliable: 'Servicio confiable',
    aboutPromiseReliableDesc: 'Desinfección profesional y puntual en su acera en la que puede confiar.',
    aboutPromiseEco: 'Limpieza ecológica',
    aboutPromiseEcoDesc: 'Lavado a alta temperatura con desinfectantes ecológicos que protegen el medio ambiente.',
    aboutGivingBackTitle: 'Retribuir',
    aboutGivingBackText: 'Nuestra comunidad y nuestro planeta nos importan. Limpi dona a fundaciones ecológicas que combaten el cambio climático y protegen el medio ambiente. Cada cliente que limpia con Limpi ayuda a construir un futuro más limpio.',
    aboutServingLehighTitle: 'Sirviendo a Lehigh Acres',
    aboutServingLehighText: 'Orgullosamente sirviendo a Lehigh Acres, Florida.',
    aboutBookVisitBtn: 'Reservar una Visita',
    aboutCommunityPhotoCaption: 'Hogares limpios, comunidad verde • Lehigh Acres, Florida',
  },

  ht: {
    appName: 'Limpi',
    tagline: 'Poubèl Pwòp. Kay An Sante.',
    subTagline: 'Lave poubèl ak netwaye fatra bò twotwa nan Lehigh Acres',
    servingLehigh: 'N ap sèvi nan Lehigh Acres, FL',
    back: 'Tounen',
    continue: 'Kontinye',
    manage: 'Jere',
    cancel: 'Anile',
    save: 'Anrejistre',
    close: 'Fèmen',
    done: 'Fini',
    reschedule: 'Chanje Dat',
    ecoSanitizing: 'Dezenfeksyon Ekolojik',
    sparkleGuaranteeTitle: 'Garanti 100% Pwòp Nèt',
    sparkleGuaranteeDesc: 'San move sant, pwòp epi dezenfekte garanti chak vizit.',
    threeMonthPlan: 'Plan',
    forThreeMonths: '',
    dueToday: 'Pou Peye Jodi a',

    // New Plans & Extras
    singleVisitTitle: 'Yon Sèl Vizit',
    singleVisitPrice: '$19.99 pou chak vizit',
    singleVisitCommitment: 'San okenn angajman',
    singleVisitDesc: 'Chwazi jou ou vle sèvis la, chak fwa.',
    singleVisitBtn: 'Rezève yon Vizit',
    annualPlanTitle: 'Plan Anyèl',
    annualPlanBadge: 'Pi Bon Pri',
    annualPlanPrice: '$239.99 pou 1 an',
    annualPlanCommitment: 'Angajman 1 an',
    annualPlanVisitRate: '1 vizit netwayaj chak mwa',
    annualPlanBonusVisits: 'Plis 5 vizit kado GRATIS pou pwograme nenpòt lè w vle (17 vizit an total)',
    annualPlanBtn: 'Kòmanse Plan Anyèl',
    extrasTitle: 'Sèvis Siplemantè',
    extraVisitsDesc: 'Vizit anplis nan menm mwa a (2 oswa plis sèvis pa mwa): $10 pou chak sèvis siplemantè.',
    extraVisitsAnnualCover: 'Manm Plan Anyèl: itilize 5 vizit kado gratis ou yo pou peye sèvis anplis yo.',
    extraBinsDesc: '3 oswa plis poubèl: $10 anplis pou chak poubèl.',
    binsIncludedNote: 'Gen jiska 2 poubèl ladan l.',
    howLimpiWorksPricingText: 'Yon sèl vizit $19.99, san angajman. Plan anyèl $239.99 pou 1 an avèk 5 vizit gratis.',
    freeVisitsLeft: 'Vizit gratis ki rete',
    useFreeVisitBtn: 'Itilize yon vizit gratis',
    bookAnotherVisitBtn: 'Rezève yon lòt vizit',
    switchToAnnualPlanBtn: 'Chanje pou Plan Anyèl',
    monthOf12: 'Mwa 2 sou 12',
    annualCommitmentEnds: 'Dat renouvèlman plan anyèl la',
    singleVisitOrderSummary: 'Yon Sèl Vizit',
    annualPlanOrderSummary: 'Plan Anyèl (1 an • 17 vizit an total)',
    extraBinsItem: 'Poubèl anplis ($10 chak)',
    extraServicesItem: 'Sèvis siplemantè ($10 chak)',
    agreeAnnualTermsCheckbox: 'Mwen dakò ak plan anyèl 1 an an, renouvèlman otomatik chak ane ak',
    agreeSingleTermsCheckbox: 'Mwen dakò ak règleman ak kondisyon rezèvasyon vizit endividyèl la ak',
    bonusVisitScheduled: 'Vizit kado a pwograme avèk siksè!',
    pickMonthlyDayTitle: 'Chwazi Jou Netwayaj Chak Mwa W la',
    pickSingleDayTitle: 'Chwazi Jou Sèvis Ou a',
    pickMonthlyDaySubtitle: 'Plan Anyèl gen 1 vizit chak mwa ladan l. Chwazi jou w la nan semèn nan.',
    pickSingleDaySubtitle: 'Chwazi jou ou vle sèvis la, chak fwa.',

    navHome: 'Lakay',
    navSchedule: 'Orè',
    navAbout: 'Sou Nou',
    navAccount: 'Kont',

    createAccountTab: 'Kreye Kont',
    signInTab: 'Konekte',
    fullNameLabel: 'Non Konplè',
    fullNamePlaceholder: 'Non ak siyati',
    phoneLabel: 'Nimewo Telefòn',
    emailLabel: 'Adrès Imèl',
    passwordLabel: 'Modpas',
    forgotPasswordLink: 'Bliye modpas?',
    createAccountBtn: 'Kreye Kont',
    signInBtn: 'Konekte',
    orContinueWith: 'oswa kontinye ak',
    alreadyHaveAccount: 'Ou gen yon kont deja?',
    newToLimpi: 'Nouvo sou Limpi?',

    forgotPasswordTitle: 'Bliye Modpas Ou?',
    forgotPasswordDesc: 'Mete imèl kont ou a pou nou voye yon lyen sekirize pou reset modpas ou.',
    sendLinkBtn: 'Voye lyen',
    resetLinkSentTitle: 'Lyen Voye!',
    resetLinkSentDesc: 'Nou voye enstriksyon yo nan imèl ou. Klike sou lyen an pou antre nan Limpi ankò.',
    backToSignIn: 'Tounen nan Koneksyon',

    howItWorksHeader: 'Kijan Limpi Fonksyone ak Pri',
    howItWorksSubtitle: 'Netwayaj pwofesyonèl ak dezenfeksyon UV bò twotwa an 3 etap senp.',
    howItWorksTitle: 'Kijan Li Fonksyone',
    simpleAutomated: 'Senp & Otomatik',
    step1Title: 'Chwazi plan w',
    step1Desc: 'Chwazi Yon Sèl Vizit ($19.99) oswa Plan Anyèl ($239.99 pou 1 an avèk 5 vizit gratis). Gen jiska 2 poubèl ladan l.',
    step2Title: 'Nou netwaye bò twotwa w',
    step2Desc: 'Nou lave ak dezenfekte poubèl yo ak reyon UV, epi netwaye espas fatra ki bò kote yo a.',
    step3Title: 'Jwi yon poubèl fre',
    step3Desc: 'Poubèl pwòp, san move sant, epi esterilize chak fwa.',
    pricingCardTitle: 'Yon sèl vizit $19.99, san angajman. Plan anyèl $239.99 pou 1 an avèk 5 vizit gratis.',
    pricingCardDesc: 'Gen jiska 2 poubèl lave ak dezenfekte ak reyon UV bò twotwa w ak tout espas fatra a pwòp.',
    extraBinsNote: '3 oswa plis poubèl: $10 anplis pou chak poubèl.',
    extraBinsSubnote: 'Gen jiska 2 poubèl ladan l. Sèvis siplemantè nan menm mwa a: $10.',
    seePlansBtn: 'Gade Plan Yo',

    selectPlanTitle: 'Chwazi Plan Ou',
    selectPlanSubtitle: 'Yon sèl vizit oswa plan anyèl avèk 5 vizit kado.',
    standardPlanTitle: 'Yon Sèl Vizit',
    standardPlanDesc: 'Chwazi jou ou vle sèvis la, chak fwa. San okenn angajman.',
    frequentPlanTitle: 'Plan Anyèl',
    frequentPlanDesc: 'Angajman 1 an. 1 vizit chak mwa plis 5 vizit kado GRATIS (17 vizit an total).',
    extraBinsNotice: 'Gen jiska 2 poubèl ladan l. 3 oswa plis poubèl: $10 anplis pou chak poubèl.',
    renewsNotice: 'Vizit anplis nan menm mwa a: $10 chak. Manm anyèl yo ka itilize 5 vizit gratis yo.',
    numberOfBinsTitle: 'Kantite Poubèl',
    binsIncludedDesc: 'Jiska 2 poubèl ladan l nan plan w la',
    oneBin: '1 Poubèl',
    twoBins: '2 Poubèl',
    includedBadge: 'Ladan l',
    threePlusBins: '3+ Poubèl',
    perExtraBin: '+$10 chak',

    serviceAddressTitle: 'Adrès Sèvis ak Poubèl',
    serviceAddressSubtitle: 'Limpi sèvi tout kay rezidansyèl nan Lehigh Acres, FL.',
    streetLabel: 'Adrès Lari',
    unitLabel: 'Apatman / Inite (Si genyen)',
    cityStateLabel: 'Vil & Eta',
    zipCodeLabel: 'Kòd Postal (Verifikasyon Zòn)',
    lehighOnly: 'Lehigh Acres Sèlman',
    zipValidMsg: 'Nou sèvi adrès sa a nan Lehigh Acres, FL!',
    zipInvalidMsg: 'Limpi sèvi sèlman nan Lehigh Acres, FL (Kòd postal: 33936, 33971, 33972, 33973, 33974, 33976).',
    setLehighZipBtn: 'Mete kòd postal Lehigh Acres (33936)',
    gateCodeLabel: 'Kòd baryè oswa enstriksyon (Si genyen)',
    binLocationQuestion: 'Kote poubèl ou yo ye?',
    locCurbside: 'Bò twotwa / Bout antre machin',
    locCurbsideNote: 'Pi bon opsyon pou sèvis rapid',
    locSideLeft: 'Bò kay la (Agòch)',
    locSideLeftNote: 'Fasil pou rive depi devan lakou a',
    locSideRight: 'Bò kay la (Adwat)',
    locSideRightNote: 'Fasil pou rive depi devan lakou a',
    locGate: 'Dèyè baryè devan',
    locGateNote: 'Mete kòd baryè a anba a',

    pickDayTitle: 'Chwazi Jou Netwayaj Ou',
    pickDaySubtitle: 'Chwazi jou ak lè ou pi pito pou sèvis bò twotwa nan Lehigh Acres.',
    serviceDayLabel: 'Jou Sèvis',
    matchesTrashDay: 'Menm jou kamyon fatra w pase',
    timeWindowLabel: 'Moman nan Jounen an',
    curbsideReminderTitle: 'Rapèl Pou Bò Twotwa',
    curbsideReminderDesc: 'Tanpri mete poubèl yo bò twotwa anvan 7:00 AM nan maten sèvis la. Kamyon mobil nou an ap lave yo epi remete yo byen pwòp.',
    morningWindow: 'Maten (7:30 AM – 11:30 AM)',
    afternoonWindow: 'Apremidi (12:00 PM – 4:00 PM)',

    checkoutTitle: 'Verifye epi Kòmanse Plan',
    checkoutSubtitle: 'Konfime enfòmasyon w pou aktive netwayaj la nan Lehigh Acres.',
    sanitizedCurbsideCare: 'Sèvis Bò Twotwa Esterilize',
    activeBadge: 'Aktif',
    expressCheckoutLabel: 'Peman Rapid',
    cardDetailsLabel: 'Enfòmasyon Kat',
    cardNumberLabel: 'Nimewo Kat la',
    expiryLabel: 'Mwa / Ane',
    cvcLabel: 'Kòd CVC',
    zipLabel: 'Kòd Postal',
    agreeTermsCheckbox: 'Mwen dakò ak règleman plan an, renouvèlman otomatik (pou plan anyèl) ak',
    termsWord: 'Règleman yo',
    startMyPlanBtn: 'Kòmanse Plan Mwen',
    activatingPlan: 'N ap aktive plan an...',
    cleanGuaranteeTag: '100% Dlo cho ekolojik • Dezenfekte ak reyon UV & Odè fre',

    confirmationTag: 'Sèvis Konfime',
    youAreAllSet: 'Tout Bagay Pare Nèt!',
    confirmationSubtitle: 'Sèvis ou an konfime. Ekip nou an ap pase bò twotwa w nan maten jou sèvis la!',
    orderNumberLabel: 'Lòd #LM-89240',
    receiptSentTo: 'Resi a voye nan imèl ou',
    firstCleanTitle: 'Premye Netwayaj Pwograme',
    goToMyHomeBtn: 'Ale sou paj lakay mwen',
    viewFullScheduleBtn: 'Gade Tout Orè Netwayaj Yo',

    activeShield: 'Pwoteksyon Aktif',
    yourNextCleaning: 'Pwochen Netwayaj Ou',
    commitmentActiveNotice: 'Plan Anyèl Aktif',
    cleaningOneOfThree: 'Pwogrè Plan Anyèl',
    commitmentCycle: 'Plan Anyèl 1 An',
    octUpcoming: '24 Oktòb (K ap vini)',
    novClean: 'Netwayaj Novanm',
    decClean: 'Netwayaj Desanm',
    twoServicesIncluded: '2 Sèvis Nou Fè Bò Twotwa W:',
    service1Desc: '1. Poubèl yo lave a 190°F epi dezenfekte ak reyon UV',
    service2Desc: '2. Ranmase fatra ak salte toutotou zòn poubèl ou a',
    renewsOnPrefix: 'Plan ou a ap renouvle nan dat',
    accountOverviewTitle: 'Apèsi sou Kont Ou',
    viewAll: 'Wè Tout',
    paymentMethodShort: 'Mwayen Peman',
    serviceAddressShort: 'Adrès Sèvis la',

    cleaningRouteTitle: 'Wout ak Vizit Netwayaj',
    cleaningRouteSubtitle: 'Netwayaj bò twotwa rezidansyèl nan Lehigh Acres',
    upcomingVisitsTab: 'Vizit K ap Vini',
    pastHistoryTab: 'Istorik Pase',
    confirmedRouteStatus: 'Wout Konfime',
    scheduledStatus: 'Pwograme',
    cleanedStatus: 'Netwaye',
    importantCommitmentRuleTitle: 'Avantaj Manm Anyèl',
    importantCommitmentRuleDesc: 'Plan Anyèl la gen 1 vizit chak mwa plis 5 vizit kado gratis pou w itilize nenpòt lè.',
    currentCommitmentCycle: 'Abònman Anyèl',
    onTrack: 'Mwa 2 sou 12',
    pauseOrSkipBtn: 'Jere Vizit oswa Sote',
    holdOnTitle: 'Tann yon ti moman!',
    pauseWarningHighlight: 'Ou ka chanje dat vizit ou a nenpòt lè san okenn penalite.',
    pauseWarningDetail: 'Manm anyèl yo jwi chanjman dat gratis epi 5 vizit kado anplis.',
    keepMyVisitBtn: 'Kenbe Vizit Mwen',
    pauseAnywayBtn: 'Chanje Dat Vizit la',

    visitDetailTitle: 'Detay sou Vizit la',
    confirmedRouteService: 'Sèvis Wout Konfime',
    rescheduleVisitBtn: 'Chanje Dat Vizit la',
    selectNewServiceDay: 'Chwazi Yon Lòt Jou',
    confirmRescheduledBtn: 'Konfime Nouvo Dat la',
    rescheduledSuccess: '✓ Dat la chanje avèk siksè!',

    accountTitle: 'Kont',
    activeStatus: 'AKTIF',
    memberSince: 'Manm depi Septanm 2023',
    totalCleansStat: 'Total Netwayaj',
    nextCycleStat: 'Pwochen Sik',
    currentPlanBadge: 'Plan Aktyèl',
    upgradePlanBtn: 'Ogmante Plan',
    downgradePlanBtn: 'Chanje Plan',
    changeBinsBtn: 'Chanje Poubèl',
    cancelPlanBtn: 'Anile Plan',
    cancelTooltipText: 'Angajman anyèl aktif fini nan dat 24 Oktòb 2025',
    accountSettingsHeader: 'Paramèt ak Preferans Kont',
    paymentMethodRow: 'Mwayen Peman',
    addressRow: 'Adrès',
    helpRow: 'Èd',
    helpRowDesc: 'Kontakte ekip sipò ak kamyon nan Lehigh Acres',
    logOutRow: 'Dekonekte',
    logOutModalTitle: 'Dekonekte sou Limpi?',
    logOutModalDesc: 'W ap tounen sou paj akeyi a. Orè vizit ou yo ap rete pwograme san enteripsyon.',
    logOutConfirmBtn: 'Dekonekte',
    cancelBtn: 'Anile',

    helpModalTitle: 'Sèvis Kliyan Limpi',
    messageUsBtn: 'Voye Mesaj',
    callUsBtn: 'Rele Nou',
    dispatchHoursTitle: 'Lè Biwo Lehigh Acres Louvri',
    monFriHours: 'Lendi – Vandredi: 7:00 AM – 5:00 PM',
    satHours: 'Samdi: 8:00 AM – 1:00 PM',
    sunHours: 'Dimanch: Fèmen (Reparasyon Kamyon)',

    orderConfirmedTitle: 'Lòd Konfime',
    paidBadge: 'Peye',
    firstScheduledCleaning: 'Premye Netwayaj Pwograme',
    updatePaymentTitle: 'Mete Nouvo Kat Peman',
    primaryCardOnFile: 'Kat Prensipal ki Anrejistre',
    autoPayActiveBadge: 'PEMAN OTOMATIK AKTIF',
    savePaymentBtn: 'Anrejistre Mwayen Peman',
    cardSavedMsg: 'Kat la Anrejistre avèk Siksè!',
    editServiceAddressTitle: 'Chanje Adrès Sèvis la',
    editServiceAddressDesc: 'Asire w kote poubèl yo ye ak kòd baryè a kòrèk pou kamyon mobil nou an.',
    saveAddressBtn: 'Anrejistre Adrès',
    addressUpdatedMsg: 'Adrès la Chanje avèk Siksè!',
    howCanWeHelpTitle: 'Kouman nou ka ede w?',
    dispatchBasedLehigh: 'Ekip sèvis lokal nou an baze dirèkteman nan Lehigh Acres, Florid.',
    sendMessageToDispatch: 'Voye yon Mesaj bay Ekip la',
    sendMessageBtn: 'Voye Mesaj',
    messageSentSuccess: 'Nou resevwa mesaj la! Ekip la ap reponn ou talè konsa.',
    notificationsTitle: 'Notifikasyon',
    recentUpdates: 'Dènye Nouvèl',
    markAllRead: 'Make tout kòm li',
    smsArrivalAlert: 'N ap voye yon SMS ak imèl ba w 15 minit anvan kamyon nou an rive bò twotwa w.',
    aboutLimpiLink: 'Konsènan Limpi',
    aboutLimpiTitle: 'Konsènan Limpi',
    aboutOurMissionTitle: 'Misyon Nou',
    aboutOurMissionText: 'Fè kay nan Lehigh Acres pi pwòp, pi an sante, epi pi agreyab lè nou fè netwayaj poubèl yo vin senp, fyab, epi respekte anviwònman an.',
    aboutWhatWeDoTitle: 'Sa Nou Fè',
    aboutWhatWeDoText: 'Limpi netwaye epi dezenfekte poubèl ou yo ak zòn fatra bò twotwa w la, pou kay ou rete fre san move sant ak bèt nwizib. Rezève sou telefòn ou, chwazi jou w la, epi nou pran swen rès la.',
    aboutOurPromiseTitle: 'Pwomès Nou',
    aboutPromiseEasyBooking: 'Rezèvasyon fasil',
    aboutPromiseEasyBookingDesc: 'Rezève sou telefòn ou nan mwens pase de minit avèk dat fleksib.',
    aboutPromiseReliable: 'Sèvis fyab',
    aboutPromiseReliableDesc: 'Dezenfeksyon pwofesyonèl bò twotwa w sou orè ou ka toujou konte sou li.',
    aboutPromiseEco: 'Netwayaj ekolojik',
    aboutPromiseEcoDesc: 'Lave ak dlo cho ansanm ak pwodui ekolojik ki pwoteje anviwònman Florid la.',
    aboutGivingBackTitle: 'Soutni Kominote a',
    aboutGivingBackText: 'Kominote nou an ak planèt nou an enpòtan pou nou. Limpi fè don bay fondasyon ekolojik ki konbat chanjman klimatik epi pwoteje anviwònman an. Chak kliyan ki netwaye ak Limpi ede sipòte yon avni ki pi pwòp.',
    aboutServingLehighTitle: 'N ap Sèvi Lehigh Acres',
    aboutServingLehighText: 'Nou fyè pou n ap sèvi Lehigh Acres, Florida.',
    aboutBookVisitBtn: 'Rezève yon Vizit',
    aboutCommunityPhotoCaption: 'Kay ki pwòp, kominote ki vèt • Lehigh Acres, Florida',
  },
};

