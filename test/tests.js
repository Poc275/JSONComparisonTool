QUnit.test("Validation tests", function(assert) {
    var validator = new Validator();

    // no files provided, validator returns false
    assert.deepEqual(false, validator.validateFileInputs(), "Comparison cannot begin until all files are provided");
});