export default `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lazy Resume</title>
  <link href="https://ui.components.workers.dev/?components=Link,Button,FormField,Input,Checkbox,Stack,Row,Dialog" rel="stylesheet">
  <style>
    /* Basic form styling - customize as needed */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .Surface {
      display: flex;
    }
    .Panel {
      width: 400px;
      margin-right: 20px;
    }
    .FormField {
      margin-bottom: 10px;
    }
    .FormField label {
      display: block;
      margin-bottom: 5px;
    }
    .FormField input,
    .FormField textarea {
      width: 100%;
    }
    .Preview {
      flex: 1;
    }
    .Preview iframe {
      width: 100%;
      height: 800px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <div class="Surface">
    <div class="Panel">
      <h1>Lazy Resume</h1>
      <button id="fillExample">Fill Example</button> <br> <br>
      <form id="resumeForm" class="Stack" method="GET" action="https://generate.resume.workers.dev">
        <fieldset>
          <legend>Personal Information</legend>
          <div class="FormField">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required>
          </div>
          <div class="FormField">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="FormField">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone">
          </div>
          <div class="FormField">
            <label for="linkedin">LinkedIn:</label>
            <input type="url" id="linkedin" name="linkedin">
          </div>
          <div class="FormField">
            <label for="location">Location:</label>
            <input type="text" id="location" name="location">
          </div>
        </fieldset>

        <fieldset>
          <legend>Profile Summary</legend>
          <div class="FormField">
            <label for="summary">Summary:</label>
            <textarea id="summary" name="summary"></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Areas of Expertise</legend>
          <div class="FormField">
            <label for="expertise">Expertise (comma-separated):</label>
            <textarea id="expertise" name="expertise"></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Professional Experience</legend>
          <div id="experiences">
          </div>
          <button type="button" id="addExperience">Add Experience</button>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <div id="educations">
          </div>
          <button type="button" id="addEducation">Add Education</button>
        </fieldset>

        <button class="Button Button-is-primary" type="submit">Generate Resume</button>
      </form>
    </div>
    <figure class="Preview">
      <iframe class="Preview--iframe" src="https://generate.resume.workers.dev" border="0" title="Resume PDF preview"></iframe>
    </figure>
  </div>

  <script>
    const experiencesContainer = document.getElementById('experiences');
    const addExperienceButton = document.getElementById('addExperience');
    let experienceCount = 0;

    const addExperience = () => {
      experienceCount++;
      const experienceDiv = document.createElement('div');
      experienceDiv.classList.add('FormField');
      experienceDiv.innerHTML = \`
        <h3>Experience \${experienceCount}</h3>
        <label for="jobTitle\${experienceCount}">Job Title:</label>
        <input type="text" id="jobTitle\${experienceCount}" name="jobTitle\${experienceCount}">
        <label for="company\${experienceCount}">Company:</label>
        <input type="text" id="company\${experienceCount}" name="company\${experienceCount}">
        <label for="startDate\${experienceCount}">Start Date:</label>
        <input type="text" id="startDate\${experienceCount}" name="startDate\${experienceCount}">
        <label for="endDate\${experienceCount}">End Date:</label>
        <input type="text" id="endDate\${experienceCount}" name="endDate\${experienceCount}">
        <label for="description\${experienceCount}">Description:</label>
        <textarea id="description\${experienceCount}" name="description\${experienceCount}"></textarea>
      \`;
      experiencesContainer.appendChild(experienceDiv);
    };

    addExperienceButton.addEventListener('click', addExperience);

    const educationsContainer = document.getElementById('educations');
    const addEducationButton = document.getElementById('addEducation');
    let educationCount = 0;

    const addEducation = () => {
      educationCount++;
      const educationDiv = document.createElement('div');
      educationDiv.classList.add('FormField');
      educationDiv.innerHTML = \`
        <h3>Education \${educationCount}</h3>
        <label for="degree\${educationCount}">Degree:</label>
        <input type="text" id="degree\${educationCount}" name="degree\${educationCount}">
        <label for="university\${educationCount}">University:</label>
        <input type="text" id="university\${educationCount}" name="university\${educationCount}">
        <label for="eduStartDate\${educationCount}">Start Date:</label>
        <input type="text" id="eduStartDate\${educationCount}" name="eduStartDate\${educationCount}">
        <label for="eduEndDate\${educationCount}">End Date:</label>
        <input type="text" id="eduEndDate\${educationCount}" name="eduEndDate\${educationCount}">
      \`;
      educationsContainer.appendChild(educationDiv);
    };

    addEducationButton.addEventListener('click', addEducation);

    const fillExampleButton = document.getElementById('fillExample');
    fillExampleButton.addEventListener('click', fillExampleData);

    const form = document.querySelector('form');
    const iframe = document.querySelector('iframe');

    const updatePreview = () => {
      const data = new FormData(form);
      const queryString = new URLSearchParams(data).toString();
      const url = \`\${form.action}?\${queryString}\`;
      iframe.src = url;
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      updatePreview();
    });

    // Function to fill the form with example data
    function fillExampleData() {
      document.getElementById('fullName').value = 'Peerapat Chiaprasert';
      document.getElementById('email').value = 'peerapat.chiaprasert@gmail.com';
      document.getElementById('phone').value = '+66(8)96-624-6630';
      document.getElementById('linkedin').value = 'linkedin.com/in/peerapat.chiaprasert';
      document.getElementById('location').value = 'Bangkok, Thailand';
      document.getElementById('summary').value = 'Results-oriented operations leader with 9+ years of experience driving high impact initiatives, optimizing logistics processes, and leading high-performing teams. Proven track record in managing end-to-end operations, implementing data-driven strategies, and collaborating with stakeholders to deliver results.';
      document.getElementById('expertise').value = 'Strategic Planning & Execution, Cross-Functional Collaboration, Innovative Growth Strategies, E-commerce Growth, P&L Management, Commercial Strategy, Online Platform Operations, Team Leadership, Analytical Thinking, Go-to-Market Strategy, Stakeholder Management';

      // Clear existing experiences and educations
      experiencesContainer.innerHTML = '';
      educationsContainer.innerHTML = '';
      experienceCount = 0;
      educationCount = 0;

      // Add experiences
      addExperience();
      document.getElementById('jobTitle1').value = 'General Manager';
      document.getElementById('company1').value = 'TiffinLabs - Bangkok, Thailand';
      document.getElementById('startDate1').value = 'Mar 2022';
      document.getElementById('endDate1').value = 'Oct 2023';
      document.getElementById('description1').value = 'Expanded TiffinLabs' 100 storefronts of delivery-centric brand in Thailand. Built and directed entire business team, namely, marketing, business development, and operations, to ensure alignment with company's vision.\\nCrafted product-market fit proposition to launch 7 delivery-focused food brands, defining brand roadmap to ensure product/value proposition set up process to capture changing trends.\\nImproved GMV by 20% on monthly basis, streamlining the company's marketing plans with the delivery platform to maximize NPD sales, and scheduling regular product enhancements.\\nReduced COGS by 15% from lower purchase price and logistic costs, initiating sourcing process with distributor, crafting and negotiating terms, achieving target price, quality and faster fulfilment partnership';

      addExperience();
      document.getElementById('jobTitle2').value = 'Head, GrabKitchen';
      document.getElementById('company2').value = 'Grab - Bangkok, Thailand';
      document.getElementById('startDate2').value = 'Jun 2017';
      document.getElementById('endDate2').value = 'Feb 2022';
      document.getElementById('description2').value = 'Established GrabKitchen as the largest cloud kitchen network in Thailand, developing an asset-lite model and securing a deal with a top F&B company (CPG), resulting in a scalable and profitable business model.\\nAchieved 20% GMV uplift and 4x ROI from initiating and managing marketing campaigns, including thematic campaigns, strategic partnerships, and JBPs.\\nDeveloped feasibility model to ensure profitability of individual kitchens and calculate payback period, constructing the model using past performance sales with location-specific demand trends data.\\nMaintained high retention rate at all kitchen locations from 90% occupancy and <10% churn rate by using effective selection and leading data-driven locations and analysis of geo-specific data points.\\nDeveloped and maintained a portfolio valued at more than 400 mm THB in annual GMV, which included over 120 food and beverage accounts, including street vendors, local chains, GCFs, and strategic partners.\\nPropelled GrabFood to be market leader with 10x completed daily orders within 8 months and established key functions including fleet management, project lead development, revenue collection, and customer services such as MK, Starbucks, After You, Tim Hortons, Minor, CRG, and other top F&B players.';

      // Add education
      addEducation();
      document.getElementById('degree1').value = "Bachelor's in Accounting (International Program)";
      document.getElementById('university1').value = 'Thammasat University - Bangkok, Thailand';
      document.getElementById('eduStartDate1').value = '2011';
      document.getElementById('eduEndDate1').value = '2014';

      // Trigger form submission to update preview
      updatePreview();
    }

    // Call the function when the page loads
    window.onload = fillExampleData;
  </script>
</body>
</html>`;