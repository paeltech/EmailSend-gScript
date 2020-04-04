function sendEmail(e) {
    var html = HtmlService.createTemplateFromFile("email.html");
    var htmlText = html.getCode();

    var emailTo = e.response.getRespondentEmail();
    var subject = "Thanks for registering for the Wikiloves Africa webinar 1";
    var textBody = "This email require html support. Please make sure you open ith a client that supports html emails";
    var options = { htmlBody: htmlText };

    if (emailTo !== undefined) {
        GmailApp.sendmail(emailTo, subject, textBody, options);
    }

}