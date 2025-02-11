$(function(){

/* All of the comment text is already enclosed in <p> tags. If you need to add additional markup, make sure to start with a closed </p> and end with re-opening the <p> */

var annotations = [
    {
        "el": "h2",
        "title" : "Page headers",
        "page": "All steps",
        "comment": "These headers appear at the top of each page of the form, and for this redesign we've decided to make them more conversational/directional. They include:</p>       <li>What product or service is your complaint about?</li>       <li>What type of issue is your complaint about?</li>        <li>What happened?</li>         <li>What companies are involved?</li>       <li>What people are involved?</li>      <li>Review your complaint and attach documents</li>         <p>This can be contrasted with the more stolid noun-based step names in the existing forms, for example, the existing <a href=\"https://help.consumerfinance.gov/app/debtcollection/ask#currentPage=0\">Debt Collection complaint form</a></p>      <p>In that comparison, note that in this prototype the step names aren't always visible as part of the side nav. We made this decision because including the names added a lot of visual noise to every page while not giving much more value than the numbers on their own. See <a href=\"ADDLINK\">these comps</a> for a possible fly-out of the names as a hover state."
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
        "comment": "This textarea needs to be big enough for a narrative about what happened. On the existing forms, it has a max character count of 4000 characters, but I'm not sure where that number came from.</p><p>In this prototype, I've set the field to be in focus when the user arrives at the page, which is a subtle nudge to get going on describing what happened, but there may be negative implications for screen readers."
    },
    {
        "el": "#narrative-consent-checkbox",
        "title" : "Narrative consent checkbox",
        "page": "Step 3",
        "comment": "When the user selects this checkbox, their narrative will be included in our Consumer Complaint Database. How cool is that?"
    },
    {
        "el": "#desired-resolution-header",
        "title" : "Desired resolution header",
        "page": "Step 3",
        "comment": "In the existing forms, the label/header for this textarea is 'Desired resolution', which is also the term that is used for it internally. We think that 'What would be a fair resolution to this issue?' is better because it's less passive. We don't have much data on whether it's an improvement, but consumers did understand this prompt clearly in our three rounds of testing."
    },
    {
        "el": "#save-and-continue-later-link",
        "title" : "Save and continue later functionality",
        "page": "Steps 3 through 6",
        "comment": "This allows users to save their progress. It doesn't show up on Steps 1 and 2 because users have not entered enough information to justify saving until Step 3.</p> <p>We think that the call to action 'Save and Continue Later' is better than just 'Save' because the action is only necessary if you want to leave the form; a simple 'Save' link might imply that you need to save your progress throughout the session. This is important because non-logged-in users (i.e., most users) will need to create an account and/or log in before they can save, which is a lot of unnecessary effort for users who plan on completing the form in a single session (which will result in an account being generated for them).</p> <p>After the user selects 'Save and continue later', a modal titled 'Create an account so you can continue later' pops up, with tabbed options to create an account or log in to an existing one. For the log in option, we clarify that 'If you have submitted a complaint to the CFPB in the past, log in to save this complaint to your account,' which is important because many existing complaintants don't realize that they have an 'Login' with the CFPB. After selecting 'Save progress' for either option, the next modal displays a 'complaint draft ID number and instructions about how to finish this complaint at a later date. One exciting idea that has been supported by project stakeholders is the ability to call the Call Center, give the CSR their 'complaint draft ID number' and complete their complaint submission over the phone.</p><p>The instructions also include an expiration date for the draft complaint, which is important because we don't want to maintain records for not-officially-submitted complaints for longer than users need us to. Deadlines can also be beneficial for motivating consumers to complete their complaints (we should make sure to send an email 5 days after saving and 10-14 days before the scheduled expiration to remind the consumer to complete their complaint).</p><p>If the user selects this link on the 'Review and submit' step (Step 6), the resulting modal is slightly different. Because they've already entered their email address, we should be able to (A) identify that they already have an account, and ask them to sign in with their password, or (B) present their email address and simply ask for them to create a password."
    },
    {
        "el": ".page-intro.company-info",
        "title" : "Page intro for Company Information",
        "page": "Step 4",
        "comment": "This page is for the consumer to identify the companies that (A) should receive this complaint and be listed in our Consumer Complaint Database and (B) are involved tangentially, in a way that might be useful for regulatory and/or supervisory purposes, or simply to allow the consumer to feel that they submitted a complete complaint. </p> <p>This intro also taked the opportunity to remind the consumer that this complaint will, in all fact and reality, be sent to the company."
    },
    {
        "el": ".company-intro",
        "title" : "Company type headers",
        "page": "Step 4",
        "comment": "These headers identify the type of company that the consumer should identify. For example, if the consumer selects Mortgage as the product and a Debt Collection issue, the sections should read 'Mortgage company' and 'Debt collection company'.</p>  <p>In this prototype, the headers are tied primarily to the product that the user selected, but we should also consider specific company prompts based on the issue selected. For example, if the consumer selects 'Mortgage' as a product and 'Problems making payments' as the issue, we could ask for 'Mortgage servicer' first and then 'Mortgage lender'.</p><p>The switch statements for this prototype's logic are on line 1668 of the company-information.html page.</p><p>&nbsp;</p><p>Two exceptions for this format aren't coded in this prototype. See issue <a href=\"https://github.enterprise.url/consumer-response/021-consolidated-form/issues/79\">#79</a> for a variation for auto dealers and issue <a href=\"https://github.enterprise.url/consumer-response/021-consolidated-form/issues/31\">#31</a> for a variation that deals with the many different actors in a money transfer transaction."
    },
    {
        "el": ".autocomplete-company-name",
        "title" : "Autocomplete company field",
        "page": "Step 4",
        "comment": "This is a text field that autocompletes. It could be a lot more sophisticated. Thoughts:</p><li>This prototype is using a very basic autocomplete plugin, but the ideal version would probably involve metadata with each suggested item to help the user differentiate between similar entities. A good example is 'Quick Cash' vs 'Kwik Kash'; if one of them only operates in Kentucky, listing the states where companies operate could be helpful in avoiding false positives. That said, we would then need to link our autocomplete data list to information about states where each company operates. We also received buy-in for including company logos, though that could also be a major maintenance headache as companies' logos change over time. It's complicated but worth examining further.</li><li>In this prototype, the autocomplete plugin is set to start suggesting options after the user enters two characters, and suggestions are offered that match the characters entered anywhere in the text string (i.e., not just matching the first two letters), which is super-important because users won't always know to write 'Bank of Albequerque' instead of 'Albequerque Bank'. Despite this reality, some folks on the technical team still believe that it's best for autocomplete to only match with beginning of the string. Fight that.</li><p>To see the different states available with different autocomplete results, enter the following values:</p><li>'Wells Fargo' - this will show you what happens when you enter and select a successful match</li> <li>'Bankwell Loans' OR 'Kwik Kash' - both of these will show you what happens when you select a company that is frequently mistaken for other companies</li> <li>'Bank of Snakes' - this will show you what happens when you enter the name of a company that is not in our database</li> <li>'Equifax, Experian, and Transunion' - this option allows consumers to submit a credit reporting complaint to all three major bureaus without needing to use the 'Additional company' section on this page.</li> <p><strong>Open question:</strong> Should the autocomplete suggest (A) all companies in the system, (B) only companies that might pertain to the issue selected or (C) only companies matching the company type listed in the heading for this module? Throughout three rounds of testing, consumers consistently failed to notice the heading for each company type module, so I would recommend options A or B."
    },
    {
        "el": ".company_verification_fieldset",
        "title" : "Frequently confused companies alert + options",
        "page": "Step 4",
        "comment": "We created this pattern to help avoid autocomplete false positives between similarly-named companies. Our intake team has data about frequently mis-identified companies, because if a complaint is routed to the wrong company, that company will tell us that the complainant is not one of their customers, and then our intake staff will need to read the complaint and/or contact the consumer in order to identify the correct company to receive the complaint.</p> <p>To avoid routing to the incorrect company in the first place, we'll create sets of frequently-confused companies, and whenever one of them is selected we'll ask the consumer to verify which of these options is actually the company they're expecting.</p> <p>What this <i>doesn't</i> really solve for is all of the varying names of a single institution. Try entering 'Chase' into the autocomplete to see the epic possibilities for variations. We know from both common sense and usability testing feedback that including all of these variations in the autocomplete makes things more confusing; what we still need to determine is where we should land between including everything and cutting down to a single entry of 'Chase' (neither extreme is acceptable)."
    },
    {
        "el": ".company-not-boarded-info",
        "title" : "Unknown company alert + questions",
        "page": "Step 4",
        "comment": "If the consumer enters a company that isn't available via autocomplete, they'll receive this message + questions to identify the company. There are two goals here:</p><p><li>Get the necessary information to identify the company so that we can route the consumer's complaint (sometimes this information will help our intake team realize that the consumer actually meant to enter a different company name that <i>is</i> in our system)</li> <li>If the company isn't in our database, get enough information so that we can look them up and onboard them onto our complaint intake</li>  <p>"
    },
    {
        "el": ".identify-product-options",
        "title" : "Identification options",
        "page": "Step 4",
        "comment": "Here, the user can select how the company should identify them. On the current forms, we require the consumer's mailing address for every single complaint, with the justification that 'the company needs it in order to identify and/or verify the consumer's account.' This justification doesn't make sense for products like gift cards, which are in no way connected to the consumer's address. More importantly, requiring an address makes our form less accessible to the significant number of consumers who don't have addresses for a myriad number of personal or professional reasons.</p> <p>This module makes the consumer's address one of several identification options: for <i>each</i> company entered on this page, we ask the consumer to identify one of the unique identification options available for the specific type of company selected (e.g., 'property address' is an option for mortgage companies, 'credit card number' is an option for credit card companies).</p> <p>See the matrix of identification options in <a href=\"https://github.enterprise.url/consumer-response/021-consolidated-form/issues/12#issuecomment-43728\">GitHub issue #12</a>.</p> <p><b>Important note:</b> We ask 'How should this company identify you?' instead of 'How should this company identify your account?' because consumers can submit complaints about a specific company without being a customer. For example, if your complaint is about not being offered a loan due to discriminatory practices, or if a debt collector is trying requesting that you pay a debt that is not yours."
    },
    {
        "el": "#additional-company",
        "title" : "Additional company section",
        "page": "Step 4",
        "comment": "As mentioned <a href=\"#company-intro-annotation\">above</a>, if the consumer has selected an Issue in Step 2 that's likely to involve multiple companies, this page will include sections for each type of company (e.g., for a credit reporting issue involcing a credit card, the consumer will see sections for 'Credit card company' and 'Credit reporting company'. Due to the fact that we can't possibly predict all of the possible types of companies involved with each issue, we've included this section for the consumer to add any additional company that they think should be included in the complaint, whether they're 'at fault' or involved in some other way."
    },
    {
        "el": "#additional-company-type",
        "title" : "Additional company type",
        "page": "Step 4",
        "comment": "This dropdown shows up when you select 'Yes' in the <a href=\"#additional-company-annotation\">Additional company section</a>. This information is helpful for a few reasons:</p>   <li>It will help make the autocomplete suggestions smarter <i>(ideally)</i></li>    <li>It allows us to know what options to request for 'How should this company identify you?'</li>   <li>Data, man</li>  <p>"
    },
    {
        "el": ".additional-company-checkbox",
        "title" : "Should this company receive your complaint?",
        "page": "Step 4",
        "comment": "Here hides all of the complexities of fault, blame, and consequence. If the consumer checks this box, then we will route their complaint to this company and, if the company verifies a relationship, we'll list the company in the consumer complaint database (which is a fairly negative thing). If they don't check this box, then we'll just use this information in case we end up investigating the primary company involved.</p> <p>When you check the box, we do clarify that 'We will forward your complaint to this company and ask for a response.'</p> <p><b>Note:</b> This call to action could benefit from being more clear about the potentially negative ramifications for the company. We should also think harder within CR about whether we want <i>any</i> presence of a company's name within our database to be inherently negative. "
    },
    {
        "el": ".page-intro.your-info",
        "title" : "Page intro for Your Information",
        "page": "Step 5",
        "comment": "This page is asks the person filling out the form to identify the consumers that should be listed in the complaint. This is tricky because the person filling out the form may or may not be the consumer who is having the issue (e.g., it may be the consumer, the consumer's spouse, the consumer's English-speaking child, the consumer's attorney, their financial counselor, many things).</p> <p>The solution for this trickiness on previous forms has been to ask the computer-user 'Are you submitting this complaint on behalf of yourself or someone else?', and intake data shows that 'third party submitters' aren't actually filling out the form correctly.</p> <p>Here, we're trying a different approach: we ask the consumer who the primary consumer is, whether an additional consumer is involved (e.g., a co-signer or co-borrower), and whether there's an additional point of contact (e.g., the consumer's attorney). It never asks 'What kind of person are you?', because that's a really hard question to ask in a non-awkward not-confusing way."
    },
    {
        "el": "#primary-consumer-section",
        "title" : "Primary consumer section",
        "page": "Step 5",
        "comment": "As noted above, this section is for the primary person who is having the issue. If you select 'Money transfer' as the product on Step 1, it has an additional field for identifying whether the primary consumer is the sender or the recipient."
    },
    {
        "el": "#consumer1-identity",
        "title" : "The primary consumer's role in the transaction",
        "page": "Step 5",
        "comment": "This dropdown/select menu only appears for the <b><i>primary</i></b> consumer when you select 'Money transfer' as the product on Step 1. It allows the bureau and the companies receiving the complaint to understand the primary complainant's role in the transaction."
    },
    {
        "el": ".full-name-format",
        "title" : "Full name format",
        "page": "Step 5",
        "comment": "The existing forms ask for a 'Title' in this section. It has been removed. We kept 'Suffix' because it's probably necessary."
    },
    {
        "el": "#primary-consumer-phone-and-zip",
        "title" : "Phone number and zip code as required",
        "page": "Step 5",
        "comment": "The phone number is required here as an identity verification method in case the consumer wants to access the complaint in the future. This doesn't seem like enough justification for making it required, though Ð it should probably be phone number or email.</p> <p>The Zip code is required to understand the jurisdictions of state and local laws, which is particularly important when we share this data with state attorneys general.</p> <p><b>Note #1:</b> We don't ask for state. There are, apparently, some Zip codes that exist in multiple states. If the consumer enters one of those, <i>then</i> we can ask for state. </p> <p><b>Note #2:</b> If the consumer provided an address as an identification option on Step 4, we could prepopulate the Zip code from that address into this field (this gets suggested often). If it's easy to do, that sounds fine."
    },
    {
        "el": "#primary-consumer-email",
        "title" : "Email address is mostly required, but it shouldn't be",
        "page": "Step 5",
        "comment": "The email address field is super-important because it becomes the consumer's username for accessing the account, and email is the default method for receiving updates and correspondence about the complaint. For that reason, we've added helper text to help dissuade the consumer from including a 'junk' email address in this field.<p> <p>The other side of the challenge is that a ton of American consumers don't have email addresses, so we've included a checkbox for those consumers. Select the checkbox, and we'll ask you for an alternative contact method. "
    },
    {
        "el": "#consumer-info-no-email",
        "title" : "Alternative contact methods for primary consumer",
        "page": "Step 5",
        "comment": "If the consumer selects the checkbox for 'The primary consumer doesn't have an email address', they're asked to select one of these three alternative contact options. Originally, we included 'voice call' as an option, but some financial counselors mentioned that automated phone calls from the government would probably freak people out."
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
        "comment": "Yes! Zip code is missing. You also need to deal with non-US addresses."
    },
    {
        "el": ".identify-options.someone-else",
        "title" : "Someone else will be point of contact",
        "page": "Step 5",
        "comment": "This is more advanced. Notice that when this option is selected, the header for the 'Additional point of contact' section becomes 'Point of contact', and the section is automatically opened (it stops being an optional section)."
    },
    {
        "el": "#additional-consumer-section",
        "title" : "Additional consumer section",
        "page": "Step 5",
        "comment": "Here we allow the consumer to identify whether an additional consumer should be listed in the complaint. This can be especially helpful in cases where the 'primary consumer' isn't who the company would expect, e.g., if you're submitting a complaint on behalf of yourself as the co-signer of a student loan and you want to list the name of the student who co-owes the debt with you."
    },
    {
        "el": "#consumer2-identity",
        "title" : "Additional consumer's role in the transaction",
        "page": "Step 5",
        "comment": "The options in this dropdown/select menu will be different based on the product select on Step 1 (e.g., if it's a mortgage complaint, 'additional card holder' shouldn't be an option. The case statements for these options are listed on line 1310 of your-information.html, and in <a href=\"https://github.enterprise.url/consumer-response/021-consolidated-form/issues/80\">GitHub issue #80</a> This allows the bureau and the companies receiving the complaint to understand the additional complainant's role in the transaction."
    },
    {
        "el": "#additional-consumer-email",
        "title" : "Should the additional consumer have access to this complaint?",
        "page": "Step 5",
        "comment": "If you select this checkbox, we'll create an account for this additional consumer and give them access to the complaint (online and through the call center). For that reason, when the checkbox is selected, the Email address field becomes required and we also ask for the additional consumer's phone number, with some helper text explaining why."
    },
    {
        "el": "#point-of-contact-header",
        "title" : "Point of contact section",
        "page": "Step 5",
        "comment": "Here we allow the person filling out the form to include the name of an 'additional point of contact' who can receive updates and/or fully access the complaint after it's submitted. Examples of additional points of contact include an attorney, a financial counselor, or a relative."
    },
    {
        "el": "#poc-relationship-to-consumer",
        "title" : "PoC relationship to primary consumer",
        "page": "Step 5",
        "comment": "This field helps us understand any legal details that might exist in the relationship. For attorneys and financial counselors, the follow-up questions ask for the name of the PoC's organization, which can also be helpful to track over time."
    },
    {
        "el": "#poc-access-div",
        "title" : "Should the PoC have access?",
        "page": "Step 5",
        "comment": "If the user checks this box, then the point of contact will get full access to the complaint. Phone number will show up as a required field after checking this box."
    },
    {
        "el": "#poc-disclosure",
        "title" : "Notice of PoC documentation required for full access",
        "page": "Step 5",
        "comment": "This notice appears if the use checks the 'Allow this person full access to this complaint in addition to status updates' checkbox.</p> <p>We included this in our last round of usability testing and it was not noticed at all. It should also include links to examples/resources. Ultimately the amount of documentation that is 'necessary' is up to the company, not us."
    },
    {
        "el": "#poc-email-address",
        "title" : "Contact info for point of contact",
        "page": "Step 5",
        "comment": "This is required; it will be used for email updates and/or as the username if the PoC is given full access."
    },
    {
        "el": "#affiliations-section",
        "title" : "Affiliations section",
        "page": "Step 5",
        "comment": "This used to be only about Servicemember affiliation, but we expanded it for other groups that the bureau works with. In general, usability testing participants didn't like the heading 'affiliations' and felt awkward when they weren't able to select any of the options. See more info in <a href=\"https://github.enterprise.url/consumer-response/021-consolidated-form/issues/35\">GitHub issue #35</a>."
    },
    {
        "el": "#affiliation-question",
        "title" : "Question format for affiliations",
        "page": "Step 5",
        "comment": "I don't like clauses that end with prepositions, and I also don't enjoy clauses that end with colons. This clause does both.</p>    <p>To its credit, it does well clairfy to any 'point of contact' or 'additional consumer' who might be filling out this form that we're asking about the affiliations of the <b>*Primary consumer*</b>, and not you (and our usability testing showed that this was understood). But there's probably a way to accomplish that goal without looking so yucky."
    },
    {
        "el": ".age-affiliation-option",
        "title" : "Age options in affiliations section",
        "page": "Step 5",
        "comment": "It seems that we want to track whether consumers are under 21 and whether they're a senior citizen (over 62), so instead of asking their age (which is what happens in the current forms), the thought is to have checkbox options for if they're under 21 or over 62. This ultimately led to the options in this 'Affiliations' seeming even more random. One suggestion has been to use age ranges (e.g., 45-55, 55-61, 62+), but that still seems silly if we only care about ages that are less than 21 and more than 62."
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
        "comment": "This is internally referred to as 'Review and submit', because that's the name of the final pages on the existing forms. The heading text is 'Review your complaint and attach documents' because (a) we don't want people to miss the attachment part at the bottom, (b) the 'submit' part doesn't really need a heading-announcement, and (c) 'Review your complaint, attach documents, and submit' is a bit too much text for a heading obvs.</p>    <p> "
    },
    {
        "el": "#review-product",
        "title" : "Formatting for review blocks, review product selections",
        "page": "Step 6",
        "comment": "Here we're stacking the content entered into more succinct, scannable text. It is not editable on this page because that would get super complicated super fast. To edit any of the content in these sections, the user would select the 'Edit this section' link and return to that section's page.</p> <p>For this product section, the three columns include </p> <li>the product selected under the label 'Product or service'</li> <li>The sub-product selected, under its <a href=\"#subproduct_label-annotation\">custom label</a></li>      <li>The answers to any product-specific questions (e.g., <a href=\"#store-location-questions-annotation\">store location</a>), under a custom label</li> <p><b>Importatnt note:</b> there is still an open question as to which fields should be editable from this page. Technically, if you were to edit your product selection in Step 1, we may need to ask you different questions related to Steps 2, 4, and 5. One solution is to 'freeze' the user's selections for Steps 1 & 2 after they complete those sections, but that option doesn't seem like it would benefit the consumer or the CFPB."
    },
    {
        "el": "#review-issue",
        "title" : "Review issue selections",
        "page": "Step 6",
        "comment": "This is placeholder copy."
    },
    {
        "el": "#review-wh",
        "title" : "Review what happened narrative",
        "page": "Step 6",
        "comment": "This should show the text that you entered for the 'What happened?' narrative."
    },
    {
        "el": "#narrative-consent-take-two",
        "title" : "Narrative consent info OR a second chance",
        "page": "Step 6",
        "comment": "If the user checked the box for sharing their narrative during Step 3, we include information about what that means. If the user did <i>not</i> check the box for sharing their narrative during Step 3, they get another chance here."
    },
    {
        "el": "#review-dr",
        "title" : "Review desired resolution",
        "page": "Step 6",
        "comment": "This is being included as a separate box to help make the 'What happened' + consent box simpler."
    },
    {
        "el": "#review-companies",
        "title" : "Review company information",
        "page": "Step 6",
        "comment": "This is placeholder copy."
    },
    {
        "el": "#review-people",
        "title" : "Review personal information",
        "page": "Step 6",
        "comment": "This is placeholder copy."
    },
    {
        "el": "#attachments-header",
        "title" : "Attachments section",
        "page": "Step 6",
        "comment": "At the end of the journey, we invite users to attach relevant documents, and hope that they understand that this is their last chance to upload documents for this complaint."
    },
    {
        "el": "#attachments-intro",
        "title" : "Attachments intro",
        "page": "Step 6",
        "comment": "Here we provide examples of possible attachments and try to make it super-clear that <u>the company will receive your attachments</u>. We designed a version of this page that allowed the consumer to select which attachements would go to which company and/or only to the CFPB. It seemed unnecessarily complicated, but might be worth trying if we identify a signfificant need."
    },
    {
        "el": "#attachment-fieldset",
        "title" : "Drag-and-drop area for attachments",
        "page": "Step 6",
        "comment": "HTML5 rocks"
    },
    {
        "el": "#attachment-alert",
        "title" : "Alert about attachments",
        "page": "Step 6",
        "comment": "We really want users to understand that this is their last chance to upload documents for this complaint. We also remind them on the welcome page that the complaint will be forwarded directly to the company."
    },
    {
        "el": "#certify-checkbox",
        "title" : "Certify & complete it checkbox",
        "page": "Step 6",
        "comment": "Legal stuff."
    },
    {
        "el": "#save-and-continue-later-link.final-page",
        "title" : "Save and continue later link on final page",
        "page": "Step 6",
        "comment": "In a slight variation to the save and continue link on earlier pages,"
    },
    {
        "el": "#continue-button.final-page",
        "title" : "Submit button",
        "page": "Step 6",
        "comment": "This is a pretty good call to action."
    },
    {
        "el": "",
        "title" : "",
        "page": "",
        "comment": "Password security, identity verification, account management and the crazy policy about updates, autocompleteautocompleteautocomplete, other things"
    },
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
