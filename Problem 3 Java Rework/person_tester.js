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
    alert("Welcome to the Person Tester Application!\nAs you use the application, please be sure to fill in all available fields before submitting enter.");


    var formValidation = {
        choice: function() {
            if ($("#customer_choice").is(":checked") === true && $("#employee_choice").is(":checked") === false) {
                // Toggle hide after submitting enter
                $("#choice").toggleClass("hide");
                $("#customer").toggleClass("hide");
                return "customer"
            }
            else if ($("#customer_choice").is(":checked") === false && $("#employee_choice").is(":checked") === true) {
                // Toggle hide after submitting enter
                $("#choice").toggleClass("hide");
                $("#employee").toggleClass("hide");
                return "employee"
            }
            else {
                alert("Please make a selection.")
                return false;
            }
        },
        customer: function () {
            var fncustomer = $("#first_name_customer").val();
            var lncustomer = $("#last_name_customer").val();
            var eacustomer = $("#email_address_customer").val();
            var customernum = $("#customer_number").val();

            if (fncustomer && lncustomer && eacustomer && customernum){

                if (!eacustomer.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')) {
                    alert("Please input a valid email address");
                    return false;
                }

                // hide customer input fields
                $("#customer").toggleClass("hide");

                // show output
                $("#output").toggleClass("hide");
                $("#output_paragraph").html('You entered:<br>Name: ' + fncustomer + ' ' + lncustomer + '<br>Email: ' + eacustomer + '<br>Customer number: ' + customernum);

                // show question to continue
                $("#continue_choice").toggleClass("hide");
                return true;
            }
            else {
                alert("Please fill in all fields before submitting.")
                return false;
            }
        },
        employee: function() {
            var fnemployee = $("#first_name_employee").val();
            var lnemployee = $("#last_name_employee").val();
            var eaemployee = $("#email_address_employee").val();
            var ssn = $("#social_security").val();

            // check if all fields are populated and valid
            if (fnemployee && lnemployee && eaemployee && ssn) {

                if (!eaemployee.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')) {
                    alert("Please input a valid email address.");
                    return false;
                }

                if (!ssn.match('^([0-9]{3}-?[0-9]{2}-?[0-9]{4})$')) {
                    alert("Please enter a valid social security number.");
                    return false;
                }

                // hide employee input fields
                $("#employee").toggleClass("hide");

                // show output
                $("#output").toggleClass("hide");
                $("#output_paragraph").html("You entered:<br>Name: " + fnemployee + " " + lnemployee + "<br>Email: " + eaemployee + "<br>Social security number: " + ssn);

                // show question to continue
                $("#continue_choice").toggleClass("hide");
            }
            else {
                alert("Please fill in all fields before submitting.");
                return false;
            }
        },
        continueloop: function() {
            if ($("#continue_yes").is(":checked") == true && $("#continue_no").is(":checked") == false) {
                // close window
                location.reload();
                return "yes"
            }
            else if ($("#continue_yes").is(":checked") == false && $("#continue_no").is(":checked") == true) {
                // reload window
                alert("Thanks for stopping by!");
                window.close();
                return "no"
            }
            else {
                alert("Please make a selection.");
                return false;
            }
        }

    }
    $("#enter_choice").click(function ( event ) {
        formValidation.choice();
        event.preventDefault();
    })

    $("#enter_customer").click(function ( event ) {
        formValidation.customer();
        event.preventDefault();
    })

    $("#enter_employee").click(function ( event ) {
        formValidation.employee();
        event.preventDefault();
    })


    $("#enter_continue").click(function ( event ) {
        formValidation.continueloop();
        event.preventDefault();
    })
});