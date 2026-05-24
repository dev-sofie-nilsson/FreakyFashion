function validateLength(redirectView, extraData = {}) {
  return (req, res, next) => {
    const value = req.body.input || req.query.input;

    if (value && value.length > 25) {
      return res.status(400).render(redirectView, {
        error: "Fältet får max vara 25 tecken.",
        products: [],
        searchQuery: value,
        ...extraData
      });
    }
    next();
  };
}

module.exports = validateLength;