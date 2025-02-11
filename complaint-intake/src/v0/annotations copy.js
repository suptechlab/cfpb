$(function(){

var annotations = [
    {
        "el": "h2",
        "title" : "Page header",
        "page": "All steps",
        "comment": "These headers appear at the top of each page of the form, and for this redesign we've decided to make them more conversational/directional. They include:</p>       <li>What product or service is your complaint about?</li>       <li>What type of issue is your complaint about?</li>        <li>What happened?</li>         <li>What companies are involved?</li>       <li>What people are involved?</li>      <li>Review your complaint and attach documents</li>         <p>This can be contrasted with the more stolid noun-based step names in the existing forms, for example, the existing <a href=\"https://help.consumerfinance.gov/app/debtcollection/ask#currentPage=0\">Debt Collection form</a></p>        <p>In that comparison, note that in this prototype the step names aren't always visible as part of the side nav. We made this decision because including the names added a lot of visual noise to every page while not giving much more value than the numbers on their own. See <a href=\"ADDLINK\">these comps</a> for a possible fly-out of the names as a hover state."
    },
    {
        "el": ".page-intro.select-product",
        "title" : "Page intro for Select a Product",
        "page": "Step 1",
        "comment": "This text is super-straightforward and also provides a clear option to log in to your account in the case that you have one. We decided not to include a link to explicitly 'Log In' on any of the later pages of the form because we want people to stay on the form once they start filling it out.</p>   <p><strong><i>General notes on the page intro element</i></strong></p> <p>This is the helper text introducing the page. It is absolutely critical to keep this brief! If it reaches more two lines, users are likely to skip it.</p><p>Across our three rounds of testing, we observed about half of the  participants reading this text on each page (note, however, that the tests were in a lab setting)"
    },
    {
        "el": "#product_options",
        "title" : "Top-level product options",
        "page": "Step 1",
        "comment": "Here we ask the consumer to identify the product that their complaint is about, and their selection will allow us to ask more specific questions about the product, their issue, and the companies involved. For example, if the consumer selects 'Mortgage,' we'll ask them what type of mortgage and whether they're currently in foreclosure (Step 1), the type of mortgage issue they're experiencing (Step 2), and the specific companies involved (Step 4). There are a lot of products hiding underneath each of these top-level options, so it's important that the top-level list is organized so that consumers can find the product type that they're looking for (otherwise they might leave, thinking it's not an option).</p> <p>This list is an evolution of those listed on <a href=\"http://www.consumerfinance.gov/complaint/\">consumerfinance.gov/complaint</a>.</p> <p>We took all 48 products and sub-products (<a href=\"ADDLINK\">here is the full list</a>) and conducted an open card sort with three-member teams from RMR and CR Investigations and then conducted a closed sort with two financial counselors in San Antonio.</p> <p>Throughout all three rounds of usability testing, the top-level list performed really well. The few areas for concern/improvement that we noticed include:</p>    <li>'Vehicle loan or lease' can seem like the correct option for title loans</li> <li>'Credit card or prepaid card' should have an option for 'Debit card' that would lead to 'Checking account' being <i>actually</i> selected as the product.</li><p>The order of products is (1) loans products in order of complaint frequency, (2) other consumer-initiated products and services listed in order of complaint frequency and (3) Credit Reporting & Debt Collection (the two non-consumer-initiated services) listed in order of complaint frequency."
    },
    {
        "el": ".subproduct_label",
        "title" : "Labels for sub-products",
        "page": "Step 1",
        "comment": "After you select a product, we've provided different copy per product for the follow-up prompt, which allows for a more natural follow-up question than 'Select a sub-product'. The ten versions are:</p>   <li>What kind of mortgage?</li> <li>What kind of student loan?</li> <li>Loan or lease?</li> <li>What kind of loan?</li> <li>What kind of loan?</li> <li>What kind of card?</li> <li>Which type of banking product?</li> <li>What type of service?</li>  <li>What type of debt?</li> <li>What type of credit reporting product?</li> <p> "
    },
    {
        "el": ".store-location-questions",
        "title" : "Product-specific questions about store location",
        "page": "Step 1",
        "comment": "These questions show up when the user selects one of the following sub-products:</p>    <li>Payday loan</li>    <li>Pawn loan</li>  <li>Title loan</li> <li>Installment loan</li> <li>money transfers, I think CHECKTHIS</li>   Test participants found the questions to be straightforward and easy to answer.</p> <p><strong>Note:</strong> If the user selects 'At a store', we ask for the state where the store is located. In some cases, this will be redundant with identifying the name and/or address of the company in Step 4, but there are different legal implications for the state in which the loan is originated (i.e., which branch location of ABC Nonbank that you visited) vs the state where the company is headquartered.</p><p><strong>Open question:</strong> It may make more sense to ask for state where the store is located in Step 4."
    },
    {
        "el": "#school-question",
        "title" : "Select a school",
        "page": "Step 1",
        "comment": "This is helpful because of schools and stuff"
    },
    {
        "el": ".page-intro.select-issue",
        "title" : "Page intro for Select an Issue",
        "page": "Step 2",
        "comment": "This intro text includes the name of the product and/or sub-product that was selected in Step 1, which can helps ensure that the user is looking at the correct set of issue options.</p>   <p>As noted below, this page caused anxiety in all three rounds of usability testing in 2014 because users couldn't find a single option that fit their exact issue. Some folks were bothered by the idea of describing their complex problem with a small structured option, but most were bothered by the fact that several different options applied to their situation and they didn't understand why they were only allowed to select one (the existing and strongly-held policy is one issue per complaint).</p>  <p>The second sentence in this intro text tries to solve for both anxieties as succinctly as possible. We used it in the third round of usability testing, and it did perform slightly better than the version in the first two tests, but the *actual* problem to solve is the fact that the options aren't collectively exhaustive and you're forced to only pick one.</p> <p><strong>Action items:</strong> </p> <li>Changing the policy on this section of structured data has huge impacts to our Consumer Complaint Database and other operational areas, so all possible changes will need to consider a lot of additional variables. That said, possible changes hold the potential for more and better data. </li> <li>It might be better to put this question after the What Happened field, so users have already had a chance to talk about their specific situation. See documetation about page order for more nuanced thoughts</li> <p> "
    },
    {
        "el": ".all-topissues",
        "title" : "Top-level issues",
        "page": "Step 2",
        "comment": "These issues are specific to the product and/or sub-product that the consumer selected on the previous page.</p>    <p>For some products, selecting a top-level issue will slide down sub-issues. For others, the top-level is the end of the line. In general, the formatting, language, and strategy for each set of issue options is inconsistent and needs to be revisited. See <a href=\"#page-intro.select-issue-annotation\">.page-intro.select-issue</a> for additional context about how these options can be frustrating.</p> <p><strong>Action item:</strong> During testing, we observed that participants were much more comfortable with selecting options when each option included helper text (for example, see the issues when you select 'Student loan'). Whether or not we're able to refactor the sets of issue options in the near-future, we should add helper text to all of them unless there's a really good reason not to."
    },
    {
        "el": ".credit-reporting-issue",
        "title" : "Credit Reporting as an 'Issue'",
        "page": "Step 2",
        "comment": "We've included options for 'Problems with my credit report' and 'Problems with a debt collector' for all credit- and loan-based products, which helps us solve for the instances when consumers select 'mortgage' or 'credit card' for a complaint that should actually be sent to a Credit Reporting Agency or Debt Collector.</p> <p>This way, a consumer can select 'Mortgage' and then see all of the issues available for a 'Mortgage' complaint. If they select 'Problems with my credit report or score', they'll be offered <strong>almost</strong> the exact same top-level issue options for a 'Credit Reporting' complaint, just as if they had selected 'Credit reporting' in Step 1.<p>"
    },
    {
        "el": ".debt-collection-issue",
        "title" : "Debt Collection as an 'Issue'",
        "page": "Step 2",
        "comment": "We've included options for 'Problems with my credit report' and 'Problems with a debt collector' for all credit- and loan-based products, which helps us solve for the instances when consumers select 'mortgage' or 'credit card' for a complaint that should actually be sent to a Credit Reporting Agency or Debt Collector.</p> <p>This way, a consumer can select 'Mortgage' and then see all of the issues available for a 'Mortgage' complaint. If they select 'Problems with a debt collector', they'll be offered the exact same top-level issue options for a 'Debt Collection' complaint, just as if they had selected 'Debt Collection' in Step 1.<p>"
    },
    {
        "el": "#select_subissue h3",
        "title" : "Labels for sub-issues",
        "page": "Step 2",
        "comment": "This copy for asking the user to select a sub-issue, 'Select one', is the same for all products and issues. It's fairly effective but also uninspiring and machinelike. It could be a lot better. For example, we've written custom labels for choosing a sub-product (see <a href=\"#subproduct_label-annotation\">.subproduct_label</a> which references Step 1).</p> <p><strong>Action item:</strong> The sub-issue labels should be customized within the effort to refactor all of the issues lists (mentioned above in <a href=\"#page-intro.select-issue-annotation\">.page-intro.select-issue</a>). The copy should also reinforce/educate that the consumer is only allowed to select one option."
    },
    {
        "el": ".credit-reporting-zombie",
        "title" : "Credit reporting zombie issues ",
        "page": "Step 2",
        "comment": "As mentioned above, these are almost the exact same issues as the consumer would have seen if they had selected 'Credit reporting' in Step 1. The only difference is that 'Unable to get my credit report or credit score' is removed."
    },
    {
        "el": ".debt-collection-zombie",
        "title" : "Debt collection zombie issues ",
        "page": "Step 2",
        "comment": "These are the exact same issues as the consumer would have seen if they had selected 'Debt collection' in Step 1."
    },
    {
        "el": "#resolution_options",
        "title" : "How have you attempted to resolve this issue?",
        "page": "Step 2",
        "comment": "This is a question that's currently on the Credit Card complaint forms that some stakeholders requested we keep it on the form just for credit card complaints. The question has no specific connection to credit cards outside of how we've collected data in the past, so in our third round of usability testing we included it for all complaint types.</p> <p>Overall, our test participants understood the question and didn't mind answering it, with several of them providing very positive feedback. The few edgecases:</p> <li>One consumer who hadn't tried to contact the company yet felt that it implied that she hadn't done enough on her own (this could be seen as a positive effect)</li>   <li>One consumer pointed out that 'I have hired an attorney' for a Prepaid Card complaint (she didn't realize that these were standard options across all complaint types)</li> <p>"
    },
    {
        "el": ".page-intro.what-happened",
        "title" : "Page intro for What Happened",
        "page": "Step 3",
        "comment": "This page is for the consumer's freeform description of what happened, and we're using this intro text to lead the user directly into the big text field, which is already in focus.</p>    <p>This intro has a few goals:</p>  <li>Reminding the consumer that this description will be sent directly to the company</li>  <li>Instructing the consumer to include details</li>    <li>Instructing the consumer not to include all of their personal information</li>  <p>"
    },
    {
        "el": "#what-happened-div",
        "title" : "What happened textarea",
        "page": "Step 3",
        "comment": "This textarea needs to be big enough for a narrative about what happened. On the existing forms, it has a max character count of 4000 characters, but I'm not sure where that number came from."
    },
    {
        "el": "#narrative-consent-checkbox",
        "title" : "Narrative consent checkbox",
        "page": "Step 3",
        "comment": "Oh boy"
    },
    {
        "el": "#desired-resolution-header",
        "title" : "Desired resolution header",
        "page": "Step 3",
        "comment": "In the existing forms, the label/header for this textarea is 'Desired resolution', which is also the term that is used for it internally. We think that 'What would be a fair resolution to this issue?' is better because it's less passive; we don't have much data on whether it's an improvement."
    },
    {
        "el": "#save-and-continue-later-link",
        "title" : "Save and continue later functionality",
        "page": "Steps 3 through 6",
        "comment": "This allows users to save their progress."
    },
    {
        "el": ".page-intro.company-info",
        "title" : "Page intro for Company Information",
        "page": "Step 4",
        "comment": "OK!"
    },
    {
        "el": ".company-intro",
        "title" : "Company type headers",
        "page": "Step 4",
        "comment": "These headers identify the type of company that the consumer should identify in their complaint. For example, if the consumer selects Mortgage as the product and a Debt Collection issue, the sections should read 'Mortgage company' and 'Debt collection company'.</p>   <p>In this prototype, the headers are tied primarily to the product that the user selected, but we should also consider specific company prompts based on the issue selected. For example, if the consumer selects 'Mortgage' as a product and 'Problems making payments' as the issue, we could ask for 'Mortgage servicer' first and then 'Mortgage lender'."
    },
    {
        "el": ".autocomplete-company-name",
        "title" : "Autocomplete company field",
        "page": "Step 4",
        "comment": "This is a text field that autocompletes."
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": ".company_verification_fieldset",
        "title" : "Frequently confused companies alert + options",
        "page": "Step 4",
        "comment": "Yess"
    },
    {
        "el": ".company-not-boarded-info",
        "title" : "Unknown company alert + questions",
        "page": "Step 4",
        "comment": "Yesss"
    },
    {
        "el": ".identify-product-options",
        "title" : "Identification options",
        "page": "Step 4",
        "comment": "This is great, because"
    },
    {
        "el": ".additional-company-checkbox",
        "title" : "Should this company receive your complaint?",
        "page": "Step 4",
        "comment": "Here hides all of the complexities of fault, blame, and consequence."
    },
    {
        "el": "#additional-company",
        "title" : "Additional company section",
        "page": "Step 4",
        "comment": "This is for additional companies"
    },
    {
        "el": "#additional-company-type",
        "title" : "Additional company type",
        "page": "Step 4",
        "comment": "This dropdown shows up when you select 'Yes' in the <a href=\"#additional-company-annotation\">Additional company section</a>. This information is helpful for a few reasons:</p>   <li>It will help make the autocomplete suggestions smarter <i>(ideally)</i></li>    <li>It allows us to know what options to request for 'How should this company identify you?'</li>   <li>Data, man</li>  <p>"
    },
    {
        "el": ".page-intro.your-info",
        "title" : "Page intro for Your Information",
        "page": "Step 5",
        "comment": "OK!"
    },
    {
        "el": "#primary-consumer-section",
        "title" : "Primary consumer section",
        "page": "Step 5",
        "comment": "YeS"
    },
    {
        "el": "#consumer1-identity",
        "title" : "The primary consumer's role in the transaction",
        "page": "Step 5",
        "comment": "This dropdown/select menu only appears when you select X Y and Z"
    },
    {
        "el": ".full-name-format",
        "title" : "Full name format",
        "page": "Step 5",
        "comment": "Suffixes, man"
    },
    {
        "el": "#primary-consumer-phone-and-zip",
        "title" : "Phone number and zip code as required",
        "page": "Step 5",
        "comment": "Sure. Note the absence of STATE, man"
    },
    {
        "el": "#primary-consumer-email",
        "title" : "Email address is mostly required, but it shouldn't be",
        "page": "Step 5",
        "comment": "This has a story"
    },
    {
        "el": "#consumer-info-no-email",
        "title" : "Alternative contact methods for primary consumer",
        "page": "Step 5",
        "comment": "This is this"
    },
    {
        "el": ".identify-options.phone-number",
        "title" : "Phone number instead of email address",
        "page": "Step 5",
        "comment": "Yes!"
    },
    {
        "el": ".identify-options.physical-mail",
        "title" : "Mailing address instead of email address",
        "page": "Step 5",
        "comment": "Yes!"
    },
    {
        "el": ".identify-options.someone-else",
        "title" : "Someone else will be point of contact",
        "page": "Step 5",
        "comment": "This is more advanced"
    },
    {
        "el": "#additional-consumer-section",
        "title" : "Additional consumer section",
        "page": "Step 5",
        "comment": "YEs"
    },
    {
        "el": "#additional-consumer-email",
        "title" : "Should the additional consumer have access to this complaint?",
        "page": "Step 5",
        "comment": "You have a choice"
    },
    {
        "el": "#consumer2-identity",
        "title" : "Additional consumer's role in the transaction",
        "page": "Step 5",
        "comment": "This dropdown/select menu only appears when you select X Y and Z"
    },
    {
        "el": "#point-of-contact-header",
        "title" : "Point of contact section",
        "page": "Step 5",
        "comment": "Yes"
    },
    {
        "el": "#poc-relationship-to-consumer",
        "title" : "PoC relationship to primary consumer",
        "page": "Step 5",
        "comment": "Yes"
    },
    {
        "el": "#poc-access-div",
        "title" : "Should the PoC have access?",
        "page": "Step 5",
        "comment": "Question"
    },
    {
        "el": "#poc-disclosure",
        "title" : "Notice of PoC documentation required for full access",
        "page": "Step 5",
        "comment": "This was not noticed at all. It should also include links to examples/resources. Note that it's up to the company, not us."
    },
    {
        "el": "#poc-email-address",
        "title" : "Contact info for point of contact",
        "page": "Step 5",
        "comment": "This gets bigger, sometimes"
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "#affiliations-section",
        "title" : "Affiliations section",
        "page": "Step 5",
        "comment": "This used to be Servicemembers"
    },
    {
        "el": "#affiliation-question",
        "title" : "Question format for affiliations",
        "page": "Step 5",
        "comment": "I don't like clauses that end with prepositions, and I also don't enjoy clauses that end with colons. This clause does both.</p>    <p>To its credit, it does well clairfy to the point of contact and additional consumers that we're asking about the affiliations of the *Primary consumer*, and not you (our usability testing supported this). But there's probably a way to accomplish that goal without looking so yucky."
    },
    {
        "el": ".age-affiliation-option",
        "title" : "Age options in affiliations section",
        "page": "Step 5",
        "comment": "This didn't work well"
    },
    {
        "el": "#servicemember-details",
        "title" : "Servicemember details",
        "page": "Step 5",
        "comment": "If you are a servicemember, this. We removed some things, and added installations."
    },
    {
        "el": ".page-intro.review-submit",
        "title" : "Page intro for Review & Submit",
        "page": "Step 6",
        "comment": "This is internally referred to as 'Review and submit'. The heading text is 'Review your complaint and attach documents' because (a) we don't want people to miss the attachment part at the bottom, (b) the 'submit' part doesn't really need a heading-announcement, and (c) 'Review your complaint, attach documents, and submit' is a bit too much text for a heading obvs.</p>  <p> "
    },
    {
        "el": "#review-product",
        "title" : "Formatting for review blocks",
        "page": "Step 6",
        "comment": "In general, summarizations, stacked sections. Here, the three columns include </p> <li>the product selected under the label 'Product or service'</li>   <li>The sub-product selected, under its <a href=\"#subproduct_label-annotation\">custom label</a></li>      <li>The answers to any product-specific questions (e.g., <a href=\"#store-location-questions-annotation\">store location</a>), under a custom label</li><p>"
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": ""
    }
]

$('#annotations-list').slideUp();
$('#annotations-toggle').slideUp();

  $('#annotations-opener').on('click', function(){

        $('#annotations-list').slideDown();
        $('li.annotation-format').show();
        $('#annotations-opener').slideUp();
        $('#annotations-toggle').slideDown();
        $('#annotations-toggle').removeClass('unopened');
        $('#annotations-toggle').addClass('opened');
        $('#annotations-sidebar').addClass('opened');
        $('.wrapper-container').addClass('annoslide');
        // Loop does not assign annotation numbers to avoid confusion when numbers change as annotations are added
            var itemnumber = 0;
        $.each( annotations, function( index, element ) {
            var title = element.title;
            var comment = element.comment;
            var pages = element.page;
            var elementid = element.el;
            var uniqueclass = 'annotation-' + itemnumber;
            var elementidclean = element.el; //this is used for the anchor link in the page
            elementidclean = elementidclean.replace('.', '').replace('#', '');      //cleans out the period or pound
            var elementidnospaces = element.el; //this is used as the class for the list item
            elementidnospaces = elementidnospaces.replace('.', '').replace('#', '').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-'); //cleaning out the spaces
            $('li.annotation-format').clone().addClass(uniqueclass).removeClass('annotation-format').appendTo('#annotations-list');
            $('li.' + uniqueclass).attr('id', elementidclean + '-annotation');
            $('li.' + uniqueclass + ' h3').text(title);
            $('li.' + uniqueclass + ' a.anno-link').text(elementid);
            $('li.' + uniqueclass + ' a.anno-link').attr('href', '#' + elementidclean + '-in-page');
            $('li.' + uniqueclass + ' p.anno-link-text').prepend("(" + pages + ") &nbsp;");
//          $('li.' + uniqueclass + ' p.anno-link-text').append("  (" + pages + ")");
            $('li.' + uniqueclass + ' div.anno-comment').html('<p>' + comment + '</p>');
            $('.wrapper-container ' + elementid).addClass('has-annotation');
            $('.wrapper-container ' + elementid).prepend('<a id="' + elementidclean + '-in-page" class="annotation-button" href="#' + elementidclean + '-annotation"><h6>' + title + '</h6></a>');
            itemnumber++;
         });
        $('li.annotation-format').hide();
  });

        $('#annotations-toggle').on('click', function(){
            $('#annotations-list').slideToggle();
            $('.annotation-button').slideToggle();
            $('.wrapper-container').toggleClass('annoslide');
        $('#annotations-sidebar').toggleClass('opened');

        });

});
