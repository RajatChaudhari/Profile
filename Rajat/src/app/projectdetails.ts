export class ProjectDetails{
    projectName: string;
    domain: string;
    role: string;
    duration:string;
    technologies: string;
    description: string;
    responsibility: string;

}

export const projectArray:ProjectDetails[]=[
    {
        projectName:"Capita-One",
        domain: "UK-Education",
        role: "Senior Software Engineer(Product)",
        duration:"June'16 – Jan'18",
        technologies: ".Net 4.0 framework, C#, Oracle, LINQ, Capita Architecture",
        description: "Product used by Local Authorities as well as other stake holder in the Education system of UK to manage Persons record.",
        responsibility: "*impact analysis, *ConsultedLA for solutions, *Coding, *create UTPs and ITPs, *fixedbugs identified duredtestedphase. *Followedagile process model for SDLC."
    },
    {
        projectName:"WHSmith",
        domain: "UK-Retail",
        role: "Module Lead, Senior Software Engineer",
        duration:"December'16 – June'15",
        technologies: ".Net 4.0 framework, C#, ASP.NET, DNN, SQL SERVER 2012, LINQ, Web API",
        description: "Re-engineered the WHSmith Intranet to enable deployment on DNN",
        responsibility: "*Requirement gathering, preparedSystem Requirement documents, *Consultedfor solutions, *DesignedArchitecture, *Coding, *create UTPs and ITPs, *fixedbugs identified duredtesting.*Handledteam of 5 developers and 1 tester."
    },
    {
        projectName:"Sainsbury",
        domain: "UK-Retail",
        role: "Senior Software Engineer",
        duration:"October'15 – January'16",
        technologies: ".Net 4.0 framework, C#, HTML, JQuery, SQL SERVER 2012, LINQ, Web API",
        description: "Sainsbury Marketedand Promotion for Christmas Festival",
        responsibility: "*Requirement gathered from clients, system requirement documents, *worked with other vendors (Autograph Inc.) to develop the solution.*Consulted, Coding, create UTPs and ITPs, fixedbugs identified duredtestedphase"
     }
    ,
    {
        projectName:"KLX Aerospace Solutions",
        domain: "US-Retail",
        role: "Module Lead, Senior Software Engineer",
        duration:"March’15 – October’15",
        technologies: ".Net 4.0 framework, C#, MVC, ASP.NET, SQL SERVER 2012, LINQ, Web API",
        description: "Used by companies under the KLX umbrella to track the workflow behind approvals of acquisitions of capital assets, which may range from a tangible piece of equipment to an intangible software application.",
        responsibility: "*Requirement gathering, prepared impact analysis and system requirement documents. *Coding, create UTPs and ITPs, fixedbugs identified duredtestedphase.*Followed agile process model for SDLC.*Handled team of 8 developers."
    },
    {
        projectName:"AT&T",
        domain: "US-Environment",
        role: "Module lead, Senior Software Engineer",
        duration:"Jan’14 – Mar’15",
        technologies: ".Net 3.5 framework, C# and MVC, Web API, Jquery, SQL SERVER 2008",
        description: "This application captures, manages, tracks, trains, retains, audits, measures, monitors and reports on Environment, Health & Safety (EH&S) operations and performance.  The application retrieves information from client applications via interfaces or by direct input into the system.",
        responsibility: "*Requirement gathering and analysis*Coding, prepared UTPs, performed Integration testing and fixed bugs identified during testing phase. Implemented Waterfall process model for SDLC.*Handled team of 4 developers and 2 testers."
    },
    {
        projectName:"AT&T",
        domain: "US-Communications",
        role: "Software Engineer",
        duration:"Dec’12-Jan’14",
        technologies: ".Net 3.5 framework, C#, ASP.NET, SQL SERVER 2008, Java",
        description: "This application captures and monitors operation and performance of the system that servers as life line to the Customer service professionals, it is an integration of flows deployment system, server maintenance system, report generation and error reporting application.",
        responsibility: "*Prepared System Requirement document.*Coding, root-cause analysis for defects, and fixed bugs identified during testing phases, maintenance."
    },
    {
        projectName:"Infosys Information Systems",
        domain: "US-Services",
        role: "Software Engineer",
        duration:"Feb’12-Dec’12",
        technologies: ".Net 3.5 framework, C# and ASP.NET, SQL SERVER 2008 ",
        description: "Finance application used to disburse and maintain loan details and application to maintain employees’ data at Organization level and used in all communication systems.",
        responsibility: "*Analysis, coding, unit and integration testing, fix bugs identified during testing -phase.*Preparing reports on jobs assigned."
    }

]