const quizData = [
    {
        question: "1. What is the primary purpose of the 'Change Enablement' practice?",
        options: [
            "A) To ensure that accurate and reliable information about services is available when and where it is needed",
            "B) To minimize the negative impact of changes on services",
            "C) To restore normal service operation as quickly as possible",
            "D) To manage the lifecycle of all IT assets"
        ],
        correctAnswer: "B"
    },
    {
        question: "2. Which of the following is NOT a key component of the Service Value System (SVS)?",
        options: [
            "A) Guiding Principles",
            "B) Practices",
            "C) Governance",
            "D) Metrics"
        ],
        correctAnswer: "D"
    },
    {
        question: "3. What is the purpose of the 'Service Level Management' practice?",
        options: [
            "A) To set clear business-based targets for service performance",
            "B) To align the organization's practices and services with changing business needs",
            "C) To plan and manage the full lifecycle of all IT assets",
            "D) To systematically observe services and service components"
        ],
        correctAnswer: "A"
    },
    {
        question: "4. Which guiding principle recommends that you 'do not attempt everything at once'?",
        options: [
            "A) Start where you are",
            "B) Collaborate and promote visibility",
            "C) Progress iteratively with feedback",
            "D) Focus on value"
        ],
        correctAnswer: "C"
    },
    {
        question: "5. Which practice is responsible for ensuring that all configuration items (CIs) are identified, accounted for, and managed?",
        options: [
            "A) Incident Management",
            "B) Change Enablement",
            "C) Service Configuration Management",
            "D) Problem Management"
        ],
        correctAnswer: "C"
    },
    {
        question: "6. Which dimension of service management considers governance, management, and communication frameworks?",
        options: [
            "A) Organizations and people",
            "B) Information and technology",
            "C) Partners and suppliers",
            "D) Value streams and processes"
        ],
        correctAnswer: "A"
    },
    {
        question: "7. What is the purpose of the 'Incident Management' practice?",
        options: [
            "A) To minimize the impact of incidents by restoring normal service operation as quickly as possible",
            "B) To manage lifecycle changes in the IT infrastructure",
            "C) To detect, record, and report on events",
            "D) To establish policies and rules governing the handling of incidents"
        ],
        correctAnswer: "A"
    },
    {
        question: "8. Which guiding principle emphasizes the need to understand the context of change, including current processes and capabilities?",
        options: [
            "A) Optimize and automate",
            "B) Progress iteratively with feedback",
            "C) Focus on value",
            "D) Start where you are"
        ],
        correctAnswer: "D"
    },
    {
        question: "9. In ITIL, what is a 'service'?",
        options: [
            "A) A means of enabling value co-creation by facilitating outcomes that customers want to achieve",
            "B) The ability of an organization to carry out a specific function",
            "C) A set of specialized organizational capabilities",
            "D) The delivery of outputs to customers"
        ],
        correctAnswer: "A"
    },
    {
        question: "10. Which ITIL practice is focused on ensuring that services are continually aligned with the needs of customers?",
        options: [
            "A) Service Desk",
            "B) Continual Improvement",
            "C) Service Level Management",
            "D) Problem Management"
        ],
        correctAnswer: "B"
    },
    {
        question: "11. What is meant by the term 'value co-creation'?",
        options: [
            "A) Services are delivered by a single provider",
            "B) Value is created through active collaboration between providers and consumers",
            "C) Providers determine the value of the services they offer",
            "D) Consumers passively receive value from services"
        ],
        correctAnswer: "B"
    },
    {
        question: "12. Which practice involves the management of workarounds and known errors?",
        options: [
            "A) Incident Management",
            "B) Problem Management",
            "C) Change Enablement",
            "D) Service Request Management"
        ],
        correctAnswer: "B"
    },
    {
        question: "13. What role does governance play in the ITIL Service Value System?",
        options: [
            "A) It ensures that organizational objectives and activities are aligned and achievable",
            "B) It acts as a decision-making body for major incidents",
            "C) It manages the risk and cost of services",
            "D) It ensures continual improvement of services"
        ],
        correctAnswer: "A"
    },
    {
        question: "14. Which of these is a key activity in the 'Problem Management' practice?",
        options: [
            "A) Restoring service as quickly as possible",
            "B) Ensuring that incidents are logged and prioritized",
            "C) Analyzing the cause of incidents",
            "D) Monitoring the infrastructure for failures"
        ],
        correctAnswer: "C"
    },
    {
        question: "15. The 'Service Value Chain' is a key element of the Service Value System. What is its main purpose?",
        options: [
            "A) To manage resources and ensure service availability",
            "B) To define the set of interconnected activities that an organization performs to deliver value",
            "C) To provide a feedback loop for continual improvement",
            "D) To establish a standard for service delivery"
        ],
        correctAnswer: "B"
    },
    {
        question: "16. Which dimension of service management includes 'Service Providers and Consumers'?",
        options: [
            "A) Organizations and people",
            "B) Information and technology",
            "C) Partners and suppliers",
            "D) Value streams and processes"
        ],
        correctAnswer: "A"
    },
    {
        question: "17. What is the purpose of the 'Continual Improvement' practice?",
        options: [
            "A) To align practices and services with changing business needs through ongoing identification and improvement",
            "B) To manage the availability and performance of services",
            "C) To manage the lifecycle of all changes",
            "D) To provide a single point of contact for users"
        ],
        correctAnswer: "A"
    },
    {
        question: "18. What does the term 'Utility' refer to in ITIL 4?",
        options: [
            "A) The assurance that a product or service will meet agreed requirements",
            "B) The functionality offered by a product or service to meet a particular need",
            "C) The ability of a product or service to remove constraints from the consumer",
            "D) The perceived benefits or results expected from a product or service"
        ],
        correctAnswer: "B"
    },
    {
        question: "19. Which practice includes handling requests for information and advice?",
        options: [
            "A) Service Request Management",
            "B) Incident Management",
            "C) Service Level Management",
            "D) Problem Management"
        ],
        correctAnswer: "A"
    },
    {
        question: "20. Which ITIL guiding principle advocates the need to 'work together across boundaries'?",
        options: [
            "A) Focus on value",
            "B) Keep it simple and practical",
            "C) Collaborate and promote visibility",
            "D) Start where you are"
        ],
        correctAnswer: "C"
    },
    {
        question: "21. What is the main purpose of the 'Service Desk' practice?",
        options: [
            "A) To reduce the likelihood and impact of incidents by identifying actual and potential causes",
            "B) To restore service to normal operation as quickly as possible",
            "C) To act as the central point of contact for users and service providers",
            "D) To control the lifecycle of all changes"
        ],
        correctAnswer: "C"
    },
    {
        question: "22. Which of the following is an activity in the 'Engage' value chain?",
        options: [
            "A) Planning for service transition",
            "B) Analyzing performance data",
            "C) Ensuring stakeholder needs are understood",
            "D) Restoring service after an incident"
        ],
        correctAnswer: "C"
    },
    {
        question: "23. Which practice is responsible for managing all service requests from users?",
        options: [
            "A) Service Desk",
            "B) Incident Management",
            "C) Service Request Management",
            "D) Service Level Management"
        ],
        correctAnswer: "C"
    },
    {
        question: "24. How does the 'Focus on Value' principle relate to service management?",
        options: [
            "A) It suggests focusing on optimizing processes before understanding customer needs",
            "B) It encourages analyzing all components of a service in isolation",
            "C) It emphasizes ensuring that every action contributes to the value for the customer",
            "D) It recommends automating as many processes as possible"
        ],
        correctAnswer: "C"
    },
    {
        question: "25. What is the role of 'Governance' in the Service Value System?",
        options: [
            "A) It controls all aspects of service management by overseeing practices and service delivery",
            "B) It ensures that the four dimensions of service management are integrated",
            "C) It supports continual improvement by providing policies and guidelines",
            "D) It manages risks related to service provider relationships"
        ],
        correctAnswer: "A"
    },
    {
        question: "26. Which activity in the Service Value Chain transforms inputs into outputs?",
        options: [
            "A) Engage",
            "B) Obtain/Build",
            "C) Plan",
            "D) Improve"
        ],
        correctAnswer: "B"
    },
    {
        question: "27. In which dimension of service management would you consider factors such as contracts, regulation, and market strategy?",
        options: [
            "A) Organizations and people",
            "B) Information and technology",
            "C) Partners and suppliers",
            "D) Value streams and processes"
        ],
        correctAnswer: "C"
    },
    {
        question: "28. Which of these activities is the responsibility of 'Change Enablement'?",
        options: [
            "A) Authorizing changes to proceed",
            "B) Managing service availability",
            "C) Providing a single point of contact for service providers",
            "D) Analyzing incidents to prevent reoccurrence"
        ],
        correctAnswer: "A"
    },
    {
        question: "29. What is the purpose of the 'Information Security Management' practice?",
        options: [
            "A) To reduce the impact of service failures",
            "B) To protect the information needed by the organization to conduct its business",
            "C) To detect, diagnose, and resolve hardware and software issues",
            "D) To restore service as quickly as possible"
        ],
        correctAnswer: "B"
    },
    {
        question: "30. Which ITIL concept refers to 'a set of specialized organizational capabilities for enabling value to customers in the form of services'?",
        options: [
            "A) Service Management",
            "B) Service Value Chain",
            "C) Governance",
            "D) IT Asset Management"
        ],
        correctAnswer: "A"
    },
    {
        question: "31. What is a 'Known Error' in ITIL?",
        options: [
            "A) A documented issue that has been analyzed and has a temporary workaround",
            "B) A problem that has been logged but not yet analyzed",
            "C) An incident that has been resolved but not documented",
            "D) A service request that has been fulfilled"
        ],
        correctAnswer: "B"
    },
    {
        question: "32. Which ITIL guiding principle advises to 'Keep it simple and practical'?",
        options: [
            "A) Focus on Value",
            "B) Progress Iteratively with Feedback",
            "C) Keep it Simple and Practical",
            "D) Start Where You Are"
        ],
        correctAnswer: "C"
    },
    {
        question: "33. What is a 'Value Stream' in ITIL 4?",
        options: [
            "A) A series of steps an organization takes to deliver a product or service",
            "B) A measure of the cost versus the benefits of a service",
            "C) The overall financial return of an investment in a service",
            "D) The totality of all service requests handled by an organization"
        ],
        correctAnswer: "A"
    },
    {
        question: "34. What role does the 'Service Level Agreement' (SLA) play in service management?",
        options: [
            "A) It defines the technical specifications of services",
            "B) It acts as a contract between an organization and a supplier",
            "C) It documents agreed service performance and responsibilities between a service provider and a customer",
            "D) It is a tool for managing incidents"
        ],
        correctAnswer: "C"
    },
    {
        question: "35. Which ITIL concept refers to a 'tangible or intangible deliverable of an activity'?",
        options: [
            "A) Output",
            "B) Outcome",
            "C) Value",
            "D) Utility"
        ],
        correctAnswer: "A"
    },
    {
        question: "36. What is the main objective of 'Problem Management'?",
        options: [
            "A) To handle all user-initiated service requests",
            "B) To identify and remove the causes of incidents permanently",
            "C) To ensure that services are available at agreed times",
            "D) To support the activities of service request management"
        ],
        correctAnswer: "B"
    },
    {
        question: "37. Which ITIL 4 practice aims to manage the conditions that affect the overall performance of services?",
        options: [
            "A) Change Enablement",
            "B) Service Request Management",
            "C) Incident Management",
            "D) Service Level Management"
        ],
        correctAnswer: "D"
    },
    {
        question: "38. Which ITIL practice is focused on reducing the impact of incidents by restoring normal operation quickly?",
        options: [
            "A) Incident Management",
            "B) Problem Management",
            "C) Continual Improvement",
            "D) Change Enablement"
        ],
        correctAnswer: "A"
    },
    {
        question: "39. What is the primary purpose of the 'Service Configuration Management' practice?",
        options: [
            "A) To maintain accurate and reliable information about the configuration of services and assets",
            "B) To control the lifecycle of all changes",
            "C) To systematically observe services and service components",
            "D) To provide a central point of contact for all users"
        ],
        correctAnswer: "A"
    },
    {
        question: "40. What is the main goal of the 'Release Management' practice?",
        options: [
            "A) To ensure that all changes to services are thoroughly tested",
            "B) To manage how services and products are delivered to users",
            "C) To provide support for user incidents and service requests",
            "D) To ensure that services meet agreed performance levels"
        ],
        correctAnswer: "B"
    }
];


const quizContainer = document.getElementById('quizContainer');

quizData.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = q.question;

    questionElement.appendChild(questionTitle);

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    q.options.forEach((option, optionIndex) => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option.charAt(0);

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsElement.appendChild(optionLabel);
    });

    questionElement.appendChild(optionsElement);
    quizContainer.appendChild(questionElement);
});

function submitQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            score++;
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}
