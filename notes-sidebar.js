// SIDEBAR POPOUT

document.addEventListener('DOMContentLoaded', function () {
    // Array of topics - you can dynamically generate this from your existing content
    var topics = [
      "Acute Kidney Injury",
      "Chronic Kidney Disease",
      "Alcoholic Liver Disease",
      "Disorders of the Adrenal Gland",
      "Liver Neoplasms",
      "Liver Cirrhosis",
      "Liver Function Tests",
      "Jaundice and Signs of Liver Disease",
      "Diabetes and Its Complications",
      "Deep Vein Thrombosis and Pulmonary Embolism",
      "Thyroid Disorders",
      "Hypertension",
      "Heart Failure",
      "Heart Muscle Disease",
      "Arterial Blood Gas Analysis",
      "Bronchial Asthma",
      "Diagnosis and Treatment of Tuberculosis",
      "Headaches",
      "Tetanus",
      "Peripheral and Lower Motor Neuron Lesions",
      "Stroke",
      "Extra-Pyramidal Disorders",
      "Epilepsy",
      "Multiple Sclerosis",
      "Spinal Cord Compression Syndrome",
      "Spirochaetal Infections",
      "Nosocomial Infections and Septicemia",
      "Structure and Function of the Skin",
      "HIV and Skin",
      "Acne Vulgaris",
      "Leprosy",
      "Differential Diagnosis of Leprosy",
      "Dermatological Manifestation of HIV",
      "Non-Dermatological Manifestations of HIV",
      "Management of HIV and AIDS",
      "Rheumatic Heart Disease",
      "Infective Endocarditis",
      "Ischaemic Heart Disease",
      "",
      "",
      // Add more topics as needed
    ];

    // Function to create sidebar menu items
    function createSidebarMenu() {
      var sidebarMenu = document.querySelector('.toggle-menu');
      topics.forEach(function (topic) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
        link.href = '../lectures/' + topicSlug + '.html'; // Adjust the href based on your file structure
        link.textContent = topic;

        // Highlight the current page
        if (isCurrentPage(topicSlug)) {
          listItem.classList.add('current-page');
        }

        listItem.appendChild(link);
        sidebarMenu.appendChild(listItem);
      });
    }

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '250px';
    }

    // Function to close the sidebar
    function closeSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0';
    }

    // Function to check if the current page matches the provided topic slug
    function isCurrentPage(topicSlug) {
      var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      return currentPage === topicSlug;
    }

    // Attach event listener to the toggle button
    document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);

    // Attach event listener to the close button
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

    // Function to close the sidebar when clicking outside of it
    function closeSidebarOnClickOutside(event) {
      var sidebar = document.getElementById('sidebar');
      var sidebarBtn = document.getElementById('toggleSidebarBtn');

      // Check if the clicked element is not part of the sidebar or the toggle button
      if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        closeSidebar();
      }
    }

    // Attach event listener to the document for clicks
    document.addEventListener('click', closeSidebarOnClickOutside);

    // Create the sidebar menu on page load
    createSidebarMenu();
  });

