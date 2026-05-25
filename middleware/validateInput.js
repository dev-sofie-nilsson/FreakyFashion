function validateInput(req, res, next) {
  const input = req.body.name;
  if (input.length >= 25) {
    req.nameError = "Max 25 tecken.";
  }
  next();
}

module.exports = validateInput;
