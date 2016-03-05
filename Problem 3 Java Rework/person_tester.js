var person = function() {
    var person = function() {
        var data = {
            firstName: "",
            sFirstName: function (n) {
                data[firstName] = n
            },
            lastName: "",
            sLastName: function (n) {
                data[lastName] = n
            },
            emailAddress: "",
            sEmailAddress: function (n) {
                data[emailAddress] = n
            }
        };

        var F = function () {
        };
        f = new F();

        f.setFirstName = function (n) {
            return data[sFirstName](n)
        };
        f.getFirstName = function () {
            return data[firstName]
        };
        f.setLastName = function (n) {
            return data[sLastName](n)
        };
        f.getLastName = function () {
            return data[lastName]
        };
        f.setEmailAddress = function (n) {
            return data[sEmailAddress](n)
        };
        f.getEmailAddress = function () {
            return data[emailAddress]
        };

        // Not sure on this one.
        f.getDisplayText = function () {
        };

        f.toString = function () {
            return "Name: " + firstName + " " + lastName + "\n"
                + "Email: " + emailAddress + "\n";
        };
        return f;
    }();
};

var customer = function() {
    var customer = function(p) {
        var data = {
            customerNumber: "",
            sCustomerNumber: function(n) {data[customerNumber] = n}
        };

        var F = function(){};
        F.prototype = p;
        f = new F();

        f.setCustomerNumber = function(n) {return data[sCustomerNumber](n)};
        f.getCustomerNumber = function() {return data[customerNumber]};
        f.getDisplayText = function() {
            return F.prototype.toString() + "Customer number: " + f.getCustomerNumber() + "\n";
        };
        return f;
    }(person);
};

var employee = function() {
    var employee = function(p) {
        var data = {
            ssn: "",
            sSSN: function(n) {data[ssn] = n}
        };

        var F = function(){};
        F.prototype = p;
        f = new F();

        f.setSSN = function(n) {return data[sSSN](n)};
        f.getSSN = function() {return data[ssn]};
        f.getDisplayText = function() {
            return F.prototype.toString() + "Social security number: " + ssn + "\n";
        };
        return f;
    }(person);
};

// JQUERY STUFF HERE
$(document).ready(function() {
    alert("Welcome to the Person Tester Application!\nAs you use the application, please be sure to fill in all available fields before clicking enter.");

    $("#enter").click(function () {
        // You chose customer
        if ($("#customer_choice").is(":checked") === true && $("#employee_choice").is(":checked") === false) {
            // Toggle hide after submitting enter
            $("#choice").toggleClass("hide");
            $("#customer").toggleClass("hide");


            $("#enter").click(function() {
                var fncustomer = $("#first_name_customer").val();
                var lncustomer = $("#last_name_customer").val();
                var eacustomer = $("#email_address_customer").val();
                var customernum = $("#customer_number").val();

                // check if all fields are populated and valid
                if (fncustomer != "" && lncustomer != "" && eacustomer != "" && customernum != "") {
                    // show output
                    alert("You got here")
                }
                else {
                    alert("Please fill in all fields before submitting.");
                }
            })

        }
        // You chose employee
        else if ($("#customer_choice").is(":checked") === false && $("#employee_choice").is(":checked") === true) {
            // Toggle hide after submitting enter
            $("#choice").toggleClass("hide");
            $("#employee").toggleClass("hide");

            $("#enter").click(function() {
                var fnemployee = $("#first_name_employee").val();
                var lnemployee = $("#last_name_employee").val();
                var eaemployee = $("#email_address_employee").val();
                var ssn = $("#social_security").val();

                // check if all fields are populated and valid
                if (fnemployee != "" && lnemployee != "" && eaemployee != "" && ssn != "") {
                    // show output
                    alert("you also got here")
                }
                else {
                    alert("Please fill in all fields before submitting.");
                }
            })
            // check if all fields are populated and valid
        }
        else {
            alert("Please make a selection.");
        }

    })
});