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

  // Tabs / Navigation
  navHome: string;
  navSchedule: string;
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
    threeMonthPlan: '3-MONTH PLAN',
    forThreeMonths: 'for 3 months',
    dueToday: 'Due Today',

    navHome: 'Home',
    navSchedule: 'Schedule',
    navAccount: 'Account',

    createAccountTab: 'Create Account',
    signInTab: 'Sign In',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Sarah Jenkins',
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
    step1Desc: 'Includes 2 bins. Choose 1 or 2 cleanings per month.',
    step2Title: 'We clean at your curb',
    step2Desc: 'Bins are washed and UV-sanitized at your curb, and the trash area around them is cleaned up.',
    step3Title: 'Enjoy a fresh bin',
    step3Desc: 'Clean, odorless, and sanitized bins every single time.',
    pricingCardTitle: '1 cleaning per month. Includes up to 2 curbside bins.',
    pricingCardDesc: 'No monthly payments. Renews automatically every 3 months. Cancel anytime before renewal.',
    extraBinsNote: 'Extra bins (more than 2)',
    extraBinsSubnote: 'Add anytime during or after checkout',
    seePlansBtn: 'See Plans',

    selectPlanTitle: 'Select Your Plan',
    selectPlanSubtitle: 'Simple curbside cleaning. 3-month commitment.',
    standardPlanTitle: '1 cleaning per month',
    standardPlanDesc: 'Standard service. Includes up to 2 bins (trash + recycling). UV-sanitized at your curb.',
    frequentPlanTitle: '2 cleanings per month',
    frequentPlanDesc: 'Twice monthly cleans. Includes up to 2 bins (trash + recycling). UV-sanitized at your curb.',
    extraBinsNotice: 'Extra bins (more than 2): $15 each.',
    renewsNotice: 'Renews automatically every 3 months. Cancel anytime before renewal.',
    numberOfBinsTitle: 'Number of Bins',
    binsIncludedDesc: 'Up to 2 bins included in your plan',
    oneBin: '1 Bin',
    twoBins: '2 Bins',
    includedBadge: 'Included',
    threePlusBins: '3+ Bins',
    perExtraBin: '+$15 each',

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
    agreeTermsCheckbox: 'I agree to the 3-month plan, automatic renewal, and',
    termsWord: 'Terms',
    startMyPlanBtn: 'Start My Plan',
    activatingPlan: 'Activating Subscription...',
    cleanGuaranteeTag: '100% Eco-friendly hot water wash • UV-Sanitized & Deodorized',

    confirmationTag: 'Subscription Confirmed',
    youAreAllSet: "You're All Set!",
    confirmationSubtitle: 'Your 3-month plan is active. Our mobile wash unit will roll out to your curb on service morning!',
    orderNumberLabel: 'Order #LM-89240',
    receiptSentTo: 'Receipt sent to your email',
    firstCleanTitle: 'First Scheduled Cleaning',
    goToMyHomeBtn: 'Go to my home',
    viewFullScheduleBtn: 'View Full Cleaning Schedule',

    activeShield: 'Active Shield',
    yourNextCleaning: 'Your Next Cleaning',
    commitmentActiveNotice: '3-Month Commitment Active',
    cleaningOneOfThree: 'Cleaning 1 of 3',
    commitmentCycle: 'Commitment Cycle',
    octUpcoming: 'Oct 24 (Upcoming)',
    novClean: 'Nov Clean',
    decClean: 'Dec Clean',
    twoServicesIncluded: '2 Services Performed at Your Curb:',
    service1Desc: '1. Trash bins washed, steamed at 190°F & UV-sanitized',
    service2Desc: '2. Garbage & debris cleaned up around your curbside trash area',
    renewsOnPrefix: 'Your residential plan automatically renews on',
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
    importantCommitmentRuleTitle: 'Important Commitment Rule',
    importantCommitmentRuleDesc: 'All plans have a 3-month minimum. Pausing or skipping a visit restarts your 3-month cycle. After the minimum, cancel or pause anytime.',
    currentCommitmentCycle: 'Current Commitment Cycle',
    onTrack: 'On Track',
    pauseOrSkipBtn: 'Pause or Skip a Visit',
    holdOnTitle: 'Hold On a Second!',
    pauseWarningHighlight: 'Pausing or skipping restarts your 3-month minimum to Month 1.',
    pauseWarningDetail: 'You are currently in Month 2. Completing just 1 more scheduled clean unlocks unlimited complimentary pauses with zero commitment penalty.',
    keepMyVisitBtn: 'Keep My Visit (Recommended)',
    pauseAnywayBtn: 'Pause Anyway & Restart Cycle',

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
    cancelTooltipText: 'Available after 3-clean minimum ends Nov 30, 2024',
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
    threeMonthPlan: 'PLAN DE 3 MESES',
    forThreeMonths: 'por 3 meses',
    dueToday: 'Total Hoy',

    navHome: 'Inicio',
    navSchedule: 'Horario',
    navAccount: 'Cuenta',

    createAccountTab: 'Crear Cuenta',
    signInTab: 'Iniciar Sesión',
    fullNameLabel: 'Nombre Completo',
    fullNamePlaceholder: 'Sarah Jenkins',
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
    step1Desc: 'Incluye 2 botes. Elige 1 o 2 limpiezas al mes.',
    step2Title: 'Limpiamos en tu acera',
    step2Desc: 'Lavamos y desinfectamos con luz UV en tu acera y limpiamos la zona de basura alrededor.',
    step3Title: 'Disfruta un bote fresco',
    step3Desc: 'Botes limpios, sin olores y esterilizados siempre.',
    pricingCardTitle: '1 limpieza al mes. Incluye hasta 2 botes de acera.',
    pricingCardDesc: 'Sin pagos mensuales. Se renueva automáticamente cada 3 meses. Cancele antes de renovar.',
    extraBinsNote: 'Botes adicionales (más de 2)',
    extraBinsSubnote: 'Agregue en cualquier momento',
    seePlansBtn: 'Ver Planes',

    selectPlanTitle: 'Seleccione Su Plan',
    selectPlanSubtitle: 'Limpieza sencilla en acera. Compromiso de 3 meses.',
    standardPlanTitle: '1 limpieza al mes',
    standardPlanDesc: 'Servicio estándar. Incluye hasta 2 botes (basura + reciclaje). Desinfección UV en acera.',
    frequentPlanTitle: '2 limpiezas al mes',
    frequentPlanDesc: 'Dos limpiezas al mes. Incluye hasta 2 botes (basura + reciclaje). Desinfección UV en acera.',
    extraBinsNotice: 'Botes adicionales (más de 2): $15 c/u.',
    renewsNotice: 'Se renueva automáticamente cada 3 meses. Cancele antes de la renovación.',
    numberOfBinsTitle: 'Cantidad de Botes',
    binsIncludedDesc: 'Hasta 2 botes incluidos en su plan',
    oneBin: '1 Bote',
    twoBins: '2 Botes',
    includedBadge: 'Incluido',
    threePlusBins: '3+ Botes',
    perExtraBin: '+$15 c/u',

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
    agreeTermsCheckbox: 'Acepto el plan de 3 meses, la renovación automática y los',
    termsWord: 'Términos',
    startMyPlanBtn: 'Iniciar Mi Plan',
    activatingPlan: 'Activando Suscripción...',
    cleanGuaranteeTag: '100% Lavado con agua caliente ecológica • Desinfección UV y Desodorizado',

    confirmationTag: 'Suscripción Confirmada',
    youAreAllSet: '¡Todo Listo!',
    confirmationSubtitle: 'Su plan de 3 meses está activo. ¡Nuestro equipo móvil pasará por su acera el día de servicio!',
    orderNumberLabel: 'Orden #LM-89240',
    receiptSentTo: 'Recibo enviado a su correo',
    firstCleanTitle: 'Primera Limpieza Programada',
    goToMyHomeBtn: 'Ir a mi inicio',
    viewFullScheduleBtn: 'Ver Calendario Completo',

    activeShield: 'Escudo Activo',
    yourNextCleaning: 'Su Próxima Limpieza',
    commitmentActiveNotice: 'Compromiso de 3 Meses Activo',
    cleaningOneOfThree: 'Limpieza 1 de 3',
    commitmentCycle: 'Ciclo de Compromiso',
    octUpcoming: 'Oct 24 (Próxima)',
    novClean: 'Limpieza Nov',
    decClean: 'Limpieza Dic',
    twoServicesIncluded: '2 Servicios Realizados en su Acera:',
    service1Desc: '1. Botes lavados a 190°F y desinfectados con UV',
    service2Desc: '2. Limpieza de basura y residuos alrededor de los botes',
    renewsOnPrefix: 'Su plan residencial se renueva automáticamente el',
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
    importantCommitmentRuleTitle: 'Regla Importante de Compromiso',
    importantCommitmentRuleDesc: 'Todos los planes tienen un mínimo de 3 meses. Pausar o saltar una visita reinicia su ciclo de 3 meses. Después del mínimo, cancele en cualquier momento.',
    currentCommitmentCycle: 'Ciclo de Compromiso Actual',
    onTrack: 'Al Día',
    pauseOrSkipBtn: 'Pausar o Saltar una Visita',
    holdOnTitle: '¡Espere un momento!',
    pauseWarningHighlight: 'Pausar o saltar reinicia su mínimo de 3 meses al Mes 1.',
    pauseWarningDetail: 'Actualmente se encuentra en el Mes 2. Completar solo 1 limpieza más desbloquea pausas sin penalidad.',
    keepMyVisitBtn: 'Mantener Mi Visita (Recomendado)',
    pauseAnywayBtn: 'Pausar de Todos Modos y Reiniciar',

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
    cancelTooltipText: 'Disponible tras el mínimo de 3 limpiezas (Nov 30, 2024)',
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
    threeMonthPlan: 'PLAN 3 MWA',
    forThreeMonths: 'pou 3 mwa',
    dueToday: 'Pou Peye Jodi a',

    navHome: 'Lakay',
    navSchedule: 'Orè',
    navAccount: 'Kont',

    createAccountTab: 'Kreye Kont',
    signInTab: 'Konekte',
    fullNameLabel: 'Non Konplè',
    fullNamePlaceholder: 'Sarah Jenkins',
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
    step1Desc: 'Gen 2 poubèl ladan l. Chwazi 1 oswa 2 netwayaj pa mwa.',
    step2Title: 'Nou netwaye bò twotwa w',
    step2Desc: 'Nou lave ak dezenfekte poubèl yo ak reyon UV, epi netwaye espas fatra ki bò kote yo a.',
    step3Title: 'Jwi yon poubèl fre',
    step3Desc: 'Poubèl pwòp, san move sant, epi esterilize chak fwa.',
    pricingCardTitle: '1 netwayaj pa mwa. Gen jiska 2 poubèl ladan l.',
    pricingCardDesc: 'Pa gen peman chak mwa. Renouvle otomatikman chak 3 mwa. Ou ka anile nenpòt lè anvan renouvèlman an.',
    extraBinsNote: 'Poubèl anplis (plis pase 2)',
    extraBinsSubnote: 'Ajoute nenpòt lè pandan oswa apre peman an',
    seePlansBtn: 'Gade Plan Yo',

    selectPlanTitle: 'Chwazi Plan Ou',
    selectPlanSubtitle: 'Netwayaj bò twotwa senp. Angajman 3 mwa.',
    standardPlanTitle: '1 netwayaj pa mwa',
    standardPlanDesc: 'Sèvis estanda. Gen jiska 2 poubèl (fatra + resiklaj). Dezenfekte ak UV bò twotwa w.',
    frequentPlanTitle: '2 netwayaj pa mwa',
    frequentPlanDesc: 'De netwayaj chak mwa. Gen jiska 2 poubèl (fatra + resiklaj). Dezenfekte ak UV bò twotwa w.',
    extraBinsNotice: 'Poubèl anplis (plis pase 2): $15 chak.',
    renewsNotice: 'Renouvle otomatikman chak 3 mwa. Ou ka anile anvan renouvèlman an.',
    numberOfBinsTitle: 'Kantite Poubèl',
    binsIncludedDesc: 'Jiska 2 poubèl ladan l nan plan w la',
    oneBin: '1 Poubèl',
    twoBins: '2 Poubèl',
    includedBadge: 'Ladan l',
    threePlusBins: '3+ Poubèl',
    perExtraBin: '+$15 chak',

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
    agreeTermsCheckbox: 'Mwen dakò ak plan 3 mwa a, renouvèlman otomatik la ak',
    termsWord: 'Règleman yo',
    startMyPlanBtn: 'Kòmanse Plan Mwen',
    activatingPlan: 'N ap aktive abònman an...',
    cleanGuaranteeTag: '100% Dlo cho ekolojik • Dezenfekte ak reyon UV & Odè fre',

    confirmationTag: 'Abònman Konfime',
    youAreAllSet: 'Tout Bagay Pare Nèt!',
    confirmationSubtitle: 'Plan 3 mwa w la aktif. Ekip nou an ap pase bò twotwa w nan maten jou sèvis la!',
    orderNumberLabel: 'Lòd #LM-89240',
    receiptSentTo: 'Resi a voye nan imèl ou',
    firstCleanTitle: 'Premye Netwayaj Pwograme',
    goToMyHomeBtn: 'Ale sou paj lakay mwen',
    viewFullScheduleBtn: 'Gade Tout Orè Netwayaj Yo',

    activeShield: 'Pwoteksyon Aktif',
    yourNextCleaning: 'Pwochen Netwayaj Ou',
    commitmentActiveNotice: 'Angajman 3 Mwa Aktif',
    cleaningOneOfThree: 'Netwayaj 1 sou 3',
    commitmentCycle: 'Sik Angajman',
    octUpcoming: '24 Oktòb (K ap vini)',
    novClean: 'Netwayaj Novanm',
    decClean: 'Netwayaj Desanm',
    twoServicesIncluded: '2 Sèvis Nou Fè Bò Twotwa W:',
    service1Desc: '1. Poubèl yo lave a 190°F epi dezenfekte ak reyon UV',
    service2Desc: '2. Ranmase fatra ak salte toutotou zòn poubèl ou a',
    renewsOnPrefix: 'Plan rezidansyèl ou a ap renouvle otomatikman nan dat',
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
    importantCommitmentRuleTitle: 'Règ Enpòtan sou Angajman',
    importantCommitmentRuleDesc: 'Tout plan yo gen yon minimòm 3 mwa. Si w kanpe oswa sote yon vizit, sik 3 mwa a rekòmanse depi nan kòmansman. Apre 3 mwa a, ou ka anile nenpòt lè.',
    currentCommitmentCycle: 'Sik Angajman Aktyèl',
    onTrack: 'Sou Bon Wout',
    pauseOrSkipBtn: 'Kanpe oswa Sote yon Vizit',
    holdOnTitle: 'Tann yon ti moman!',
    pauseWarningHighlight: 'Si w kanpe oswa sote yon vizit, sa ap rekòmanse minimòm 3 mwa a nan Mwa 1.',
    pauseWarningDetail: 'Kounye a ou nan Mwa 2. Fè sèlman 1 netwayaj ankò ap ba w dwa pou kanpe sèvis la san okenn penalite.',
    keepMyVisitBtn: 'Kenbe Vizit Mwen (Rekòmande)',
    pauseAnywayBtn: 'Kanpe l Menm Si Sik la Rekòmanse',

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
    cancelTooltipText: 'Disponib apre minimòm 3 netwayaj la fin pase (30 Novanm 2024)',
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
  },
};

