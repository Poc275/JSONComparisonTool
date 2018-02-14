// Main entry point for the app
window.addEventListener("load", function(event) {
    // DOM vars
    var configAPriorityOneInput = document.getElementById('config-a-p-one');
    var configAPriorityTwoInput = document.getElementById('config-a-p-two');
    var configAPriorityThreeInput = document.getElementById('config-a-p-three');
    var configBPriorityOneInput = document.getElementById('config-b-p-one');
    var configBPriorityTwoInput = document.getElementById('config-b-p-two');
    var configBPriorityThreeInput = document.getElementById('config-b-p-three');

    // vars
    var validator = new Validator();

    // Events
    // File input changed events, used to clear any validation messages
    configAPriorityOneInput.addEventListener('change', function(event) {
        configAPriorityOneInput.style.borderColor = '#ced4da';
        document.getElementById('config-a-p-one-msg').style.display = 'none';
    }, false);

    configAPriorityTwoInput.addEventListener('change', function(event) {
        configAPriorityTwoInput.style.borderColor = '#ced4da';
        document.getElementById('config-a-p-two-msg').style.display = 'none';
    }, false);

    configAPriorityThreeInput.addEventListener('change', function(event) {
        configAPriorityThreeInput.style.borderColor = '#ced4da';
        document.getElementById('config-a-p-three-msg').style.display = 'none';
    }, false);

    configBPriorityOneInput.addEventListener('change', function(event) {
        configBPriorityOneInput.style.borderColor = '#ced4da';
        document.getElementById('config-b-p-one-msg').style.display = 'none';
    }, false);

    configBPriorityTwoInput.addEventListener('change', function(event) {
        configBPriorityTwoInput.style.borderColor = '#ced4da';
        document.getElementById('config-b-p-two-msg').style.display = 'none';
    }, false);

    configBPriorityThreeInput.addEventListener('change', function(event) {
        configBPriorityThreeInput.style.borderColor = '#ced4da';
        document.getElementById('config-b-p-three-msg').style.display = 'none';
    }, false);
    
    // Compare button click event
    document.getElementById('btn-compare').addEventListener('click', function() {
        if(validator.validateFileInputs()) {
            console.log("Files provided, beginning comparison");
        }
    }, false);
});