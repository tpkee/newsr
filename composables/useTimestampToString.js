export function useTimestampToString (date, options = {locale: 'en', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) {
    // TODO: use i18n locale
    return new Date(date).toLocaleDateString([options.locale, 'en'], options)
}