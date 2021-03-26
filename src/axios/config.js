const Url = {
    BASE_URL: ProcessingInstruction.env.NODE_ENV === 'production'
              ? '' : ''
}
export {
    Url
}