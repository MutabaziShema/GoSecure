// GoSecure — Zoho Web-to-Case form logic
// Loaded as an external script from booking-form.html

window.addEventListener('pageshow', function () {
  var btn = document.getElementById('zsSubmitButton_1333745000000420191');
  if (btn) btn.removeAttribute('disabled');
});

function trimBoth(str) { return jQuery.trim(str); }

function setAllDependancyFieldsMapping() {
  var labels = getMapDependenySelectValues(jQuery("[id='property(module)']").val(), "JSON_MAP_DEP_LABELS");
  if (labels) {
    for (var i = 0; i < labels.length; i++) {
      var obj = document.forms['zsWebToCase_1333745000000420191'][labels[i]];
      if (obj) setDependent(obj, true);
    }
  }
}

function getMapDependenySelectValues(module, key) {
  var dep = jQuery.parseJSON(jQuery("[id='dependent_field_values_" + module + "']").val());
  return dep ? dep[key] : undefined;
}

// Minimal stub — no dependent fields in this form
function setDependent(obj, isload) {}

// Mandatory fields — Email removed (optional), Subject removed (hidden/hardcoded)
var zsWebFormMandatoryFields  = ["First Name", "Contact Name", "Current Location", "Destination", "Pickup Time", "CarType"];
var zsFieldsDisplayLabelArray = ["First Name", "Last Name",    "Current Location", "Destination", "Pickup Time", "Car Type"];

function reformatAllDateFields() {
  document.querySelectorAll('.dob-field').forEach(function (field) {
    if (field.value && field.value.includes('-')) {
      var p = field.value.split('-');
      if (p.length === 3) {
        field.type  = 'text';
        field.value = p[2] + '/' + p[1] + '/' + p[0];
      }
    }
  });
}

function zsValidateMandatoryFields() {
  for (var i = 0; i < zsWebFormMandatoryFields.length; i++) {
    var field = document.forms['zsWebToCase_1333745000000420191'][zsWebFormMandatoryFields[i]];
    if (!field) continue;
    var val = (field.value || '').replace(/^\s+|\s+$/g, '');
    if (val.length === 0) {
      alert(zsFieldsDisplayLabelArray[i] + ' cannot be empty');
      field.focus();
      return false;
    }
    if (field.nodeName === 'SELECT' && field.options[field.selectedIndex].value === '-None-') {
      alert(zsFieldsDisplayLabelArray[i] + ' cannot be none');
      field.focus();
      return false;
    }
  }

  // Email: only validate format if the user actually typed something
  var emailField = document.forms['zsWebToCase_1333745000000420191']['Email'];
  if (emailField && emailField.value.trim() !== '') {
    var emailOk = /^([\w_][\w\-_.+'&]*)@(?=.{4,256}$)(([\w]+)([\-_]*[\w])*[\.])+[a-zA-Z]{2,22}$/.test(emailField.value);
    if (!emailOk) {
      alert('Please enter a valid email address');
      emailField.focus();
      return false;
    }
  }

  // All valid — reformat dates and disable button to prevent double-submit
  reformatAllDateFields();
  document.getElementById('zsSubmitButton_1333745000000420191').setAttribute('disabled', 'disabled');
}

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    setAllDependancyFieldsMapping();
    var btn = document.getElementById('zsSubmitButton_1333745000000420191');
    if (btn) btn.removeAttribute('disabled');

    // Wire up form submit (replaces removed onsubmit attribute)
    var form = document.forms['zsWebToCase_1333745000000420191'];
    if (form) {
      form.addEventListener('submit', function (e) {
        if (!zsValidateMandatoryFields()) e.preventDefault();
      });
    }

    // Wire up CarType change (replaces removed onchange attribute)
    var carType = document.getElementById('CASECF4');
    if (carType) carType.addEventListener('change', function () { setDependent(this, false); });
  }
});
