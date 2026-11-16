/*==============================================================
  SKILLS CHECK 012 — FRAME / ARCHIVE
  Question database
==============================================================*/

window.SKILLSCHECK_012 = {
    id: "012",
    title: "Image with caption, figure and figcaption",
    totalQuestions: 20,

    questions: [
        /*========================================================
          QUESTION 01 — FIGURE BASICS
        ========================================================*/
        {
            id: 1,
            category: "HTML STRUCTURE",
            type: "single",
            title: "What is the main purpose of the <figure> element?",
            description:
                "Choose the best description of this semantic HTML element.",

            code: `<figure>
    <img src="mountain.jpg" alt="Mountain landscape">
    <figcaption>Mountain at sunrise.</figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "To group self-contained content, such as an image or diagram.",
                },
                {
                    id: "B",
                    text: "To create a decorative border around an image.",
                },
                {
                    id: "C",
                    text: "To automatically resize images.",
                },
                {
                    id: "D",
                    text: "To replace the <img> element.",
                },
            ],

            correctAnswers: ["A"],

            explanation:
                "The <figure> element represents self-contained content that can be referenced as a unit. It is commonly used for images, illustrations, diagrams and code examples.",

            tip: "Think of <figure> as a semantic container for content that can stand independently from the surrounding text.",
        },

        /*========================================================
          QUESTION 02 — FIGCAPTION
        ========================================================*/
        {
            id: 2,
            category: "FIGURE & CAPTION",
            type: "single",
            title: "Which element provides a caption for a figure?",
            description:
                "Identify the semantic element designed specifically for figure captions.",

            code: `<figure>
    <img src="ocean.jpg" alt="Ocean waves">
    <!-- Which element belongs here? -->
</figure>`,

            options: [
                {
                    id: "A",
                    text: "<caption>",
                },
                {
                    id: "B",
                    text: "<description>",
                },
                {
                    id: "C",
                    text: "<figcaption>",
                },
                {
                    id: "D",
                    text: "<label>",
                },
            ],

            correctAnswers: ["C"],

            explanation:
                "<figcaption> represents the caption or legend for the contents of its parent <figure> element.",

            tip: "Remember the pair: <figure> creates the semantic group, while <figcaption> describes it.",
        },

        /*========================================================
          QUESTION 03 — SEMANTIC RELATIONSHIP
        ========================================================*/
        {
            id: 3,
            category: "SEMANTIC HTML",
            type: "single",
            title: "How is <figcaption> related to <figure>?",
            description:
                "Choose the correct relationship between these two elements.",

            code: `<figure>
    <img src="city.jpg" alt="City skyline">
    <figcaption>City skyline at night.</figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "<figcaption> must always be outside <figure>.",
                },
                {
                    id: "B",
                    text: "<figcaption> is a caption associated with its parent <figure>.",
                },
                {
                    id: "C",
                    text: "<figure> must be placed inside <figcaption>.",
                },
                {
                    id: "D",
                    text: "Both elements perform exactly the same function.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "<figcaption> is specifically associated with the <figure> that contains it. This relationship gives the figure a meaningful caption.",

            tip: "The parent-child relationship matters. A caption placed outside the figure is not its semantic figcaption.",
        },

        /*========================================================
          QUESTION 04 — ALT VS CAPTION
        ========================================================*/
        {
            id: 4,
            category: "ACCESSIBILITY",
            type: "single",
            title: "What is the difference between alt text and a visible caption?",
            description:
                "Both can describe an image, but they serve different purposes.",

            code: `<img
    src="forest.jpg"
    alt="Sunlight shining through tall trees"
>

<figcaption>
    A quiet morning in the forest.
</figcaption>`,

            options: [
                {
                    id: "A",
                    text: "Alt text is always visible, while figcaption is hidden.",
                },
                {
                    id: "B",
                    text: "They are interchangeable and have identical purposes.",
                },
                {
                    id: "C",
                    text: "Alt text provides an image alternative; figcaption provides a visible caption for a figure.",
                },
                {
                    id: "D",
                    text: "A caption automatically replaces the need for alt text.",
                },
            ],

            correctAnswers: ["C"],

            explanation:
                "The alt attribute provides a text alternative for an image, particularly for people using screen readers or when an image cannot be displayed. A figcaption provides visible context or a caption for the figure.",

            tip: "Alt describes the image alternative. Figcaption adds context to the figure. They are not automatically interchangeable.",
        },

        /*========================================================
          QUESTION 05 — VALID STRUCTURE
        ========================================================*/
        {
            id: 5,
            category: "HTML STRUCTURE",
            type: "single",
            title: "Which example correctly combines figure, image and caption?",
            description: "Choose the valid semantic structure.",

            code: null,

            options: [
                {
                    id: "A",
                    text: `<figure>
    <img src="photo.jpg" alt="A lake">
    <figcaption>A peaceful lake.</figcaption>
</figure>`,
                },
                {
                    id: "B",
                    text: `<figcaption>
    <img src="photo.jpg" alt="A lake">
</figcaption>`,
                },
                {
                    id: "C",
                    text: `<figure>
    <figcaption>
</figure>`,
                },
                {
                    id: "D",
                    text: `<img src="photo.jpg">
<figure>A peaceful lake.</figure>`,
                },
            ],

            correctAnswers: ["A"],

            explanation:
                "The first example correctly places the image and its caption inside a figure. The image also has an alt attribute.",

            tip: "A common structure is: <figure>, followed by <img>, followed by <figcaption>, and finally the closing </figure>.",
        },

        /*========================================================
          QUESTION 06 — CAPTION POSITION
        ========================================================*/
        {
            id: 6,
            category: "FIGURE & CAPTION",
            type: "single",
            title: "Where can <figcaption> appear inside a <figure>?",
            description: "HTML allows more than one valid caption position.",

            code: `<figure>
    <!-- Caption position? -->

    <img src="architecture.jpg" alt="Modern building">
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Only before the image.",
                },
                {
                    id: "B",
                    text: "Only after the image.",
                },
                {
                    id: "C",
                    text: "Either as the first or last child of the figure.",
                },
                {
                    id: "D",
                    text: "Only outside the figure.",
                },
            ],

            correctAnswers: ["C"],

            explanation:
                "A figure can contain an optional figcaption as its first or last child. Both positions are valid HTML.",

            tip: "A caption can introduce the figure before its content or describe it afterward.",
        },

        /*========================================================
          QUESTION 07 — MULTIPLE CHOICE
        ========================================================*/
        {
            id: 7,
            category: "HTML RULES",
            type: "multiple",
            title: "Which statements about <figcaption> are correct?",
            description: "Select all correct statements.",

            code: `<figure>
    <img src="art.jpg" alt="Abstract artwork">
    <figcaption>Abstract study, 2026.</figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "It describes or captions the contents of its parent figure.",
                },
                {
                    id: "B",
                    text: "It can be the first child of a figure.",
                },
                {
                    id: "C",
                    text: "It can be the last child of a figure.",
                },
                {
                    id: "D",
                    text: "Every image on a website must have a figcaption.",
                },
            ],

            correctAnswers: ["A", "B", "C"],

            explanation:
                "A figcaption describes its parent figure and can be placed at the beginning or end of that figure. However, not every image needs a figure or caption.",

            tip: "For multiple-choice questions, check every statement independently. A single incorrect selection makes the complete answer incorrect.",
        },

        /*========================================================
          QUESTION 08 — GROUPING IMAGES
        ========================================================*/
        {
            id: 8,
            category: "FIGURE & CAPTION",
            type: "single",
            title: "Can one figure contain multiple images?",
            description:
                "Imagine a figure representing a collection of related photographs.",

            code: `<figure>
    <img src="photo-1.jpg" alt="First stage">
    <img src="photo-2.jpg" alt="Second stage">
    <img src="photo-3.jpg" alt="Final stage">

    <figcaption>
        Three stages of the process.
    </figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "No. A figure can contain only one image.",
                },
                {
                    id: "B",
                    text: "Yes. Multiple related images can form one self-contained figure.",
                },
                {
                    id: "C",
                    text: "Only if all images use the same file name.",
                },
                {
                    id: "D",
                    text: "Only if figcaption is removed.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "A figure can contain multiple related pieces of content when they form one meaningful, self-contained unit. The caption can describe the collection as a whole.",

            tip: "Use one figure for a meaningful group, not simply to wrap unrelated images.",
        },

        /*========================================================
          QUESTION 09 — DECORATIVE IMAGE
        ========================================================*/
        {
            id: 9,
            category: "ACCESSIBILITY",
            type: "single",
            title: "What alt value is appropriate for a purely decorative image?",
            description:
                "The image adds visual decoration but does not communicate meaningful information.",

            code: `<img
    src="decorative-line.png"
    alt="?"
>`,

            options: [
                {
                    id: "A",
                    text: 'alt="decorative image"',
                },
                {
                    id: "B",
                    text: 'alt="image"',
                },
                {
                    id: "C",
                    text: 'alt=""',
                },
                {
                    id: "D",
                    text: "Remove the img element.",
                },
            ],

            correctAnswers: ["C"],

            explanation:
                "An empty alt attribute tells assistive technologies that the image is decorative and can generally be ignored. It is different from omitting the alt attribute entirely.",

            tip: 'Meaningful images need useful alternative text. Decorative images generally use alt="".',
        },

        /*========================================================
          QUESTION 10 — IMAGE ALTERNATIVE
        ========================================================*/
        {
            id: 10,
            category: "ACCESSIBILITY",
            type: "multiple",
            title: "What makes useful alt text for an informative image?",
            description: "Select all appropriate practices.",

            code: `<img
    src="chart.jpg"
    alt="?"
>`,

            options: [
                {
                    id: "A",
                    text: "Describe the meaningful information conveyed by the image.",
                },
                {
                    id: "B",
                    text: "Keep the description relevant to the image's purpose.",
                },
                {
                    id: "C",
                    text: "Use a generic description such as 'picture' for every image.",
                },
                {
                    id: "D",
                    text: "Avoid unnecessary details that do not help communicate its meaning.",
                },
            ],

            correctAnswers: ["A", "B", "D"],

            explanation:
                "Good alternative text communicates the important information or function of an image in its context. Generic descriptions such as 'picture' are rarely useful.",

            tip: "Think about what information someone would miss if they could not see the image.",
        },

        /*========================================================
          QUESTION 11 — FIGURE CONTENT
        ========================================================*/
        {
            id: 11,
            category: "SEMANTIC HTML",
            type: "multiple",
            title: "Which types of content can be represented by <figure>?",
            description: "A figure is not limited to photographs.",

            code: null,

            options: [
                {
                    id: "A",
                    text: "An illustration or photograph.",
                },
                {
                    id: "B",
                    text: "A diagram or chart.",
                },
                {
                    id: "C",
                    text: "A code example.",
                },
                {
                    id: "D",
                    text: "A completely unrelated page navigation menu.",
                },
            ],

            correctAnswers: ["A", "B", "C"],

            explanation:
                "Figure can represent self-contained content such as illustrations, diagrams, charts, photographs and code examples. It is not restricted to images.",

            tip: "Ask whether the content forms a self-contained unit that could be moved away from the main flow without affecting its meaning.",
        },

        /*========================================================
          QUESTION 12 — CAPTION OUTSIDE FIGURE
        ========================================================*/
        {
            id: 12,
            category: "HTML STRUCTURE",
            type: "single",
            title: "Does a caption outside a figure automatically become its figcaption?",
            description: "Consider the relationship between these elements.",

            code: `<figure>
    <img src="bridge.jpg" alt="A bridge over a river">
</figure>

<p>A bridge over the river.</p>`,

            options: [
                {
                    id: "A",
                    text: "Yes. Any paragraph after an image becomes its figcaption.",
                },
                {
                    id: "B",
                    text: "No. The paragraph is separate content and is not a figcaption.",
                },
                {
                    id: "C",
                    text: "Yes, but only when the paragraph is centered.",
                },
                {
                    id: "D",
                    text: "The browser automatically moves it inside the figure.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "A paragraph outside the figure remains a separate paragraph. It does not become a figcaption simply because it follows an image.",

            tip: "If you need a semantic figure caption, place <figcaption> inside the corresponding <figure>.",
        },

        /*========================================================
          QUESTION 13 — OPTIONAL CAPTION
        ========================================================*/
        {
            id: 13,
            category: "HTML RULES",
            type: "single",
            title: "Is <figcaption> required inside every <figure>?",
            description:
                "Think about figures that are meaningful without a visible caption.",

            code: `<figure>
    <img
        src="mountains.jpg"
        alt="Snow-covered mountain peaks"
    >
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Yes. Every figure must contain exactly one figcaption.",
                },
                {
                    id: "B",
                    text: "No. A figure can exist without a figcaption.",
                },
                {
                    id: "C",
                    text: "Only when the image is larger than 500 pixels.",
                },
                {
                    id: "D",
                    text: "Only if the image has an empty alt attribute.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "A figcaption is optional. A figure can contain self-contained content without a visible caption when no caption is needed.",

            tip: "Use semantic elements because they describe the content correctly, not simply because they are available.",
        },

        /*========================================================
          QUESTION 14 — FIGCAPTION CONTENT
        ========================================================*/
        {
            id: 14,
            category: "FIGURE & CAPTION",
            type: "multiple",
            title: "What information can a figcaption contain?",
            description: "A caption can provide more than a short image title.",

            code: `<figure>
    <img src="museum.jpg" alt="Museum exhibition hall">

    <figcaption>
        Exhibition Hall, 2026.
        Photograph by Alex.
    </figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "A short description of the figure.",
                },
                {
                    id: "B",
                    text: "A source or attribution.",
                },
                {
                    id: "C",
                    text: "A title or explanatory note.",
                },
                {
                    id: "D",
                    text: "Only a file path to the image.",
                },
            ],

            correctAnswers: ["A", "B", "C"],

            explanation:
                "A figcaption can contain a caption, title, attribution, source information or other relevant explanatory content associated with the figure.",

            tip: "A useful caption provides context that helps readers understand the figure.",
        },

        /*========================================================
          QUESTION 15 — ONE CAPTION
        ========================================================*/
        {
            id: 15,
            category: "HTML RULES",
            type: "single",
            title: "How many figcaption elements should one figure contain?",
            description: "Choose the correct HTML content-model rule.",

            code: `<figure>
    <img src="portrait.jpg" alt="Portrait">

    <figcaption>Portrait photograph.</figcaption>
    <figcaption>Photographer: Alex.</figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Exactly two.",
                },
                {
                    id: "B",
                    text: "As many as needed.",
                },
                {
                    id: "C",
                    text: "At most one.",
                },
                {
                    id: "D",
                    text: "There is no restriction.",
                },
            ],

            correctAnswers: ["C"],

            explanation:
                "The HTML content model allows at most one figcaption element as the first or last child of a figure. Combine related caption information into that one caption.",

            tip: "One figure, at most one figcaption. You can include multiple pieces of caption information inside it.",
        },

        /*========================================================
          QUESTION 16 — PRACTICAL STRUCTURE
        ========================================================*/
        {
            id: 16,
            category: "PRACTICAL HTML",
            type: "single",
            title: "You need a chart with a title and source note. Which structure is best?",
            description: "Choose the most appropriate semantic markup.",

            code: null,

            options: [
                {
                    id: "A",
                    text: `<div>
    <img src="sales.png">
    <p>Sales chart</p>
</div>`,
                },
                {
                    id: "B",
                    text: `<figure>
    <img src="sales.png" alt="Sales increased from January to June">
    <figcaption>
        Sales growth, January–June. Source: Annual report.
    </figcaption>
</figure>`,
                },
                {
                    id: "C",
                    text: `<figcaption>
    Sales growth
</figcaption>
<img src="sales.png">`,
                },
                {
                    id: "D",
                    text: `<figure>
    <title>Sales chart</title>
    <img src="sales.png">
</figure>`,
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "The figure groups the chart and its caption. The alt attribute provides a text alternative for the informative chart, while figcaption supplies its title and source note.",

            tip: "Semantic HTML communicates relationships. Choose elements based on what the content means.",
        },

        /*========================================================
          QUESTION 17 — ALT TEXT CONTEXT
        ========================================================*/
        {
            id: 17,
            category: "ACCESSIBILITY",
            type: "single",
            title: "What should alt text describe?",
            description:
                "The best alternative text depends on why the image is being used.",

            code: `<figure>
    <img
        src="product.jpg"
        alt="?"
    >
    <figcaption>
        Limited edition camera, 2026.
    </figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Always repeat the figcaption word for word.",
                },
                {
                    id: "B",
                    text: "Describe the image's relevant information or function in context.",
                },
                {
                    id: "C",
                    text: "Always use the image file name.",
                },
                {
                    id: "D",
                    text: "Always write the word 'photo'.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "Alternative text should communicate the relevant information or function of the image in its context. It does not have to duplicate the visible caption.",

            tip: "Avoid redundant descriptions. Alt text and visible captions can complement each other.",
        },

        /*========================================================
          QUESTION 18 — ACCESSIBILITY COMBINATION
        ========================================================*/
        {
            id: 18,
            category: "ACCESSIBILITY",
            type: "multiple",
            title: "Which statements about alt and figcaption are correct?",
            description: "Select all correct statements.",

            code: `<figure>
    <img
        src="wildlife.jpg"
        alt="Red fox standing in snow"
    >

    <figcaption>
        A red fox in its winter habitat.
    </figcaption>
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Alt text is an attribute of the img element.",
                },
                {
                    id: "B",
                    text: "Figcaption is an HTML element.",
                },
                {
                    id: "C",
                    text: "A visible caption automatically replaces alt text.",
                },
                {
                    id: "D",
                    text: "Alt text and figcaption can provide complementary information.",
                },
            ],

            correctAnswers: ["A", "B", "D"],

            explanation:
                "Alt is an attribute on img, while figcaption is a separate HTML element. They can communicate different but complementary information about the same image.",

            tip: "Remember the difference between an attribute and an element: alt belongs to img, while figcaption is its own element.",
        },

        /*========================================================
          QUESTION 19 — WHEN TO USE FIGURE
        ========================================================*/
        {
            id: 19,
            category: "SEMANTIC HTML",
            type: "single",
            title: "When is using <figure> most appropriate?",
            description:
                "Choose the situation that best matches its semantic purpose.",

            code: null,

            options: [
                {
                    id: "A",
                    text: "For every image, including tiny decorative icons.",
                },
                {
                    id: "B",
                    text: "For self-contained content that is referenced as a unit, such as an illustration or chart.",
                },
                {
                    id: "C",
                    text: "As a replacement for every div element.",
                },
                {
                    id: "D",
                    text: "Only when an image needs rounded corners.",
                },
            ],

            correctAnswers: ["B"],

            explanation:
                "Figure is useful when content forms a self-contained unit that can be moved away from the main flow without affecting its meaning. It is not required for every image.",

            tip: "Semantic HTML is about meaning, not appearance. CSS can style any element without changing its semantic purpose.",
        },

        /*========================================================
          QUESTION 20 — FINAL CHALLENGE
        ========================================================*/
        {
            id: 20,
            category: "FINAL CHALLENGE",
            type: "multiple",
            title: "Which statements describe valid figure and caption usage?",
            description: "Final challenge: select every correct statement.",

            code: `<figure>
    <figcaption>Mountain landscape at sunrise.</figcaption>

    <img
        src="mountain.jpg"
        alt="Sunlight illuminating a mountain peak"
    >
</figure>`,

            options: [
                {
                    id: "A",
                    text: "Figcaption can appear before the image as the first child.",
                },
                {
                    id: "B",
                    text: "Figure can contain self-contained content other than images.",
                },
                {
                    id: "C",
                    text: "A figure must always contain a figcaption.",
                },
                {
                    id: "D",
                    text: "An informative image should have appropriate alternative text.",
                },
            ],

            correctAnswers: ["A", "B", "D"],

            explanation:
                "The caption can be the first child of a figure. Figure can represent various types of self-contained content, and informative images need suitable alternative text. A figcaption itself is optional.",

            tip: "Great work! You have reached the end of this module. Remember: semantic structure, meaningful alternative text and useful captions work together.",
        },
    ],
};

/*==============================================================
  DATA VALIDATION
  Helps catch question database mistakes during development.
==============================================================*/

(() => {
    const quiz = window.SKILLSCHECK_012;

    if (!quiz || !Array.isArray(quiz.questions)) {
        console.error("Skills Check 012: Question database not found.");
        return;
    }

    if (quiz.questions.length !== quiz.totalQuestions) {
        console.warn(
            `Skills Check 012: Expected ${quiz.totalQuestions} questions, found ${quiz.questions.length}.`,
        );
    }

    const questionIds = new Set();

    quiz.questions.forEach((question) => {
        if (questionIds.has(question.id)) {
            console.warn(`Duplicate question ID: ${question.id}`);
        }

        questionIds.add(question.id);

        const optionIds = question.options.map((option) => option.id);

        question.correctAnswers.forEach((correctId) => {
            if (!optionIds.includes(correctId)) {
                console.warn(
                    `Question ${question.id}: Correct answer "${correctId}" does not exist.`,
                );
            }
        });

        if (
            question.type === "single" &&
            question.correctAnswers.length !== 1
        ) {
            console.warn(
                `Question ${question.id}: Single-choice question must have exactly one correct answer.`,
            );
        }

        if (
            question.type === "multiple" &&
            question.correctAnswers.length < 2
        ) {
            console.warn(
                `Question ${question.id}: Multiple-choice question should have at least two correct answers.`,
            );
        }
    });

    console.info(
        `Skills Check 012: ${quiz.questions.length} questions loaded successfully.`,
    );
})();
