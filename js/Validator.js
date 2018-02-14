function Validator() {
    this.validateFileInputs = function() {
        var valid = true;

        console.log("Validating... ", valid);

        console.log(document.getElementById('config-a-p-one').files.length);

        if(document.getElementById('config-a-p-one').files.length === 0) {
            valid = false;
            document.getElementById('config-a-p-one').style.borderColor = '#dc3545';
            document.getElementById('config-a-p-one-msg').style.display = 'block';

            console.log("Config A Priority 1 is blank");
        }

        if(document.getElementById('config-a-p-two').files.length === 0) {
            valid = false;
            document.getElementById('config-a-p-two').style.borderColor = '#dc3545';
            document.getElementById('config-a-p-two-msg').style.display = 'block';
        }

        if(document.getElementById('config-a-p-three').files.length === 0) {
            valid = false;
            document.getElementById('config-a-p-three').style.borderColor = '#dc3545';
            document.getElementById('config-a-p-three-msg').style.display = 'block';
        }

        if(document.getElementById('config-b-p-one').files.length === 0) {
            valid = false;
            document.getElementById('config-b-p-one').style.borderColor = '#dc3545';
            document.getElementById('config-b-p-one-msg').style.display = 'block';
        }

        if(document.getElementById('config-b-p-two').files.length === 0) {
            valid = false;
            document.getElementById('config-b-p-two').style.borderColor = '#dc3545';
            document.getElementById('config-b-p-two-msg').style.display = 'block';
        }

        if(document.getElementById('config-b-p-three').files.length === 0) {
            valid = false;
            document.getElementById('config-b-p-three').style.borderColor = '#dc3545';
            document.getElementById('config-b-p-three-msg').style.display = 'block';
        }

        console.log("Validated... ", valid);
        return valid;
    }
}