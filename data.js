const DATA = {
    "Age": [
        "Teen (12-18 yrs.)",
        "Young Adult (18-38 yrs.)",
        "Adult (36-55 yrs)",
        "Senior (56 yrs.+)"
    ],
    "Zodiac Sign": [
        {
            typeName: "Aries",
            positiveTrait: "Adventurous and energetic, pioneering and courageous, enthusiastic and confident, dynamic and quick-witted",
            negativeTrait: "Selfish and quick-tempered, impulsive and impatient, foolhardy and daredevil "
        },
        {
            typeName: "Taurus",
            positiveTrait: "Patient and reliable, warmhearted and loving, persistent and determined, placid and security loving",
            negativeTrait: "Jealous and possessive, resentful and inflexible, self-indulgent and greedy"
        },
        {
            typeName: "Gemini",
            positiveTrait: "Adaptable and versatile, communicative and witty, intellectual and eloquent, youthful and lively",
            negativeTrait: "Nervous and tense, superficial and inconsistent, cunning and inquisitive "
        },
        {
            typeName: "Cancer",
            positiveTrait: "Emotional and loving, intuitive and imaginative, shrewd and cautious, protective and sympathetic",
            negativeTrait: "Changeable and moody, overemotional and touchy, clinging and unable to let go"
        },
        {
            typeName: "Leo",
            positiveTrait: "Generous and warmhearted, creative and enthusiastic, broad-minded and expansive, faithful and loving",
            negativeTrait: "Pompous and patronizing, bossy and interfering, dogmatic and intolerant "
        },
        {
            typeName: "Virgo",
            positiveTrait: "Modest and shy, meticulous and reliable, practical and diligent, intelligent and analytical",
            negativeTrait: "Fussy and a worrier, overcritical and harsh, perfectionist and conservative"
        },
        {
            typeName: "Libra",
            positiveTrait: "Diplomatic and urbane, romantic and charming,  easygoing and sociable, idealistic and peaceable",
            negativeTrait: "Indecisive and changeable, gullible and easily influenced, flirtatious and self-indulgent"
        },
        {
            typeName: "Scorpio",
            positiveTrait: "Determined and forceful, emotional and intuitive, powerful and passionate, exciting and magnetic",
            negativeTrait: "Jealous and resentful, compulsive and obsessive, secretive and obstinate"
        },
        {
            typeName: "Sagittarius",
            positiveTrait: "Optimistic and freedom-loving, jovial and good-humored, honest and straightforward, intellectual and philosophical",
            negativeTrait: "Blindly optimistic and careless, irresponsible and superficial, tactless and restless"
        },
        {
            typeName: "Capricorn",
            positiveTrait: "Practical and prudent, ambitious and disciplined, patient and careful, humorous and reserved",
            negativeTrait: "Pessimistic and fatalistic, miserly and grudging"
        },
        {
            typeName: "Aquarius",
            positiveTrait: "Friendly and humanitarian, honest and loyal, original and inventive, independent and intellectual",
            negativeTrait: "Intractable and contrary, perverse and unpredictable, unemotional and detached"
        },
        {
            typeName: "Pisces",
            positiveTrait: "Imaginative and sensitive, compassionate and kind, selfless and unworldly, intuitive and sympathetic",
            negativeTrait: "Escapist and idealistic, secretive and vague, weak-willed and easily led"
        }
  
    ],
    "MBTI":[
        {
            typeName: "ISTJ, The Inspector",
            overview: "A person with the Introverted, Observant, Thinking, and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose",
            positiveTrait: "Honest, direct, strong-willed, dutiful, very responsible, calm, practical, create and enforce order, The Jacks-of-all-trades",
            negativeTrait: "Stubborn, insensitive, always by the book, judgmental and often unreasonably blame themselves "
        },
        {
            typeName: "ISTP, The Crafter",
            overview: "A person with the Introverted, Observant, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives",
            positiveTrait: "Relaxed, optimistic, energetic, creative, practical, spontaneous, rational, know how to prioritize, great in a crisis",
            negativeTrait: "Stubborn, insensitive, private, reserved, easily bored, dislike commitment and have the risky behavior"
        },
        {
            typeName: "ISFJ, The Protector",
            overview: "A person with the Introverted, Observant, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives",
            positiveTrait: "Supportive, reliable and patient, imaginative and observant, enthusiastic, loyal, hard-working and have good practical skills",
            negativeTrait: "Humble and shy, take things too personally, often repress their feelings, overload themselves, reluctant to change, and be too altruistic "
        },
        {
            typeName: "ISFP, The Artist",
            overview: "A person with the Introverted, Observant, Feeling, and Prospecting personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials",
            positiveTrait: "Charming, sensitive to others, imaginative, passionate, curious, and often being artistic",
            negativeTrait: "Fiercely independent, unpredictable, easily stressed, overly competitive, and have a fluctuating self-esteem"
        },
        {
            typeName: "INFJ, The Advocate",
            overview: "A person with the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do",
            positiveTrait: "Creative, insightful, principled, passionate, and altruistic",
            negativeTrait: "Sensitive to criticism, reluctant to open up, perfectionistic, avoiding the ordinary, and prone to burnout"
        },
        {
            typeName: "INFP, The Mediator",
            overview: "A person with the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do",
            positiveTrait: "Empathetic, generous, have an open-minded, creative, passionate, idealistic",
            negativeTrait: "Unrealistic, self-isolating, unfocused, emotionally vulnerable, desperate to please, and often self-critical"
        },
        {
            typeName: "INTJ, The Architect",
            overview: "A person with the Introverted, Intuitive, Thinking, and Judging personality traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one",
            positiveTrait: "Rational, informed, independent, determined, curious, and very versatile",
            negativeTrait: "Arrogant, dismissive of emotions, overly critical, combative, romantically clueless"
        },
        {
            typeName: "INTP, The Thinker",
            overview: "A person with the Introverted, Intuitive, Thinking, and Prospecting personality traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity",
            positiveTrait: "Analytical, original, open-minded, curious, objective",
            negativeTrait: "Disconnected, insensitive, dissatisfied, impatient, perfectionistic"
        },
        {
            typeName: "ESTP, The Persuader",
            overview: "A person with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits",
            positiveTrait: "Bold, rational, practical, original, perceptive, direct, sociable",
            negativeTrait: "Insensitive, impatient, prone to risk, unstructured, defiant, may miss the bigger picture"
        },
        {
            typeName: "ESTJ, The Director",
            overview: "A person with the Extraverted, Observant, Thinking, and Judging personality traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity",
            positiveTrait: "Dedicated, strong-willed, direct, honest, loyal, patient, reliable, enjoy creating order, excellent organizers",
            negativeTrait: "Judgmental, inflexible, stubborn, uncomfortable with unconventional situations, too focused on social status, difficult to relax, have difficulty expressing emotion "
        },
        {
            typeName: "ESFP, The Performer",
            overview: "A person with the Extraverted, Observant, Feeling, and Prospecting personality traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities",
            positiveTrait: "Have excellent people skills, bold, aesthetics, have showmanship, practical, observant, original",
            negativeTrait: "Poor long-term planners, unfocused, easily bored, sensitive, conflict-averse"
        },
        {
            typeName: "ESFJ, The Caregiver",
            overview: "A person with  the Extraverted, Observant, Feeling, and Judging personality traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others",
            positiveTrait: "Good at connecting with others, sensitive, have strong practical skills, a strong sense of duty, very loyal and warm",
            negativeTrait: "Inflexible, reluctant to innovate or improvise, worried about their social status, vulnerable to criticism, often too needy  but at the same time can be too selfless"
        },
        {
            typeName: "ENFP, The Champion",
            overview: "A person with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions",
            positiveTrait: "Very popular and friendly, curious, observant, energetic and enthusiastic, excellent communicators, they really know how to relax",
            negativeTrait: "Get stressed easily, find it difficult to focus, highly emotional, overthink things, poor practical skills, independent to a fault"
        },
        {
            typeName: "ENFJ, The Giver",
            overview: "A person with the Extraverted, Intuitive, Feeling, and Judging personality traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals",
            positiveTrait: "Natural leaders, tolerant, reliable, charismatic, altruistic",
            negativeTrait: "Too selfless, too sensitive, overly idealistic, struggle to make a tough decision, fluctuating self-esteem"
        },     
        {
            typeName:"ENTP, The Debater",
            overview: "A person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter",
            positiveTrait: "Quick thinkers, energetic, charismatic, original, knowledgeable, excellent brainstormers",
            negativeTrait: "Very argumentative, insensitive, intolerant, can find it difficult to focus, dislike practical matters"
        },
        {
            typeName: "ENTJ, The Commander",
            overview: "A person with the Extraverted, Intuitive, Thinking, and Judging personality traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them",
            positiveTrait: "Efficient, strategic thinkers, self-confident, strong-willed, charismatic and inspiring, energetic",
            negativeTrait: "Stubborn and dominant, arrogant, impatient, intolerant, cold and ruthless, poor handling of emotions"
        }
    ],
    "Alignment":[
        "Lawful Good, The Crusader",
        "Neutral Good, The Benefactor",
        "Chaotic Good, The Rebel",
        "Lawful Neutral, The Judge",
        "Neutral, The Undecided",
        "Chaotic Neutral, The Free Spirit",
        "Lawful Evil, The Dominator",
        "Neutral Evil, The Malefactor",
        "Chaotic Evil, The Destroyer",

    ],      
}

const TRIVIARANDOM = {
    "JOB":[],
    "":[],
    "WANT":[
        "Air",
        "Water",
        "Food",
        "Shelter",
        "Protection against assault or injury",
        "Adequate money",
        "Steady employment",
        "Good health",
        "Protection of private property",
        "Friendship",
        "Romance",
        "Intimacy",
        "Family",
        "Independence",
        "Compensation",
        "Respect",
        "Promotion",
        "Credit",
        "Gratitude",
        "Appreciation",
        "Higher education",
        "Spiritual enlightenment",
        "Artistic pursuits",
        "Travel and experience",
        "Altruistic and charitable contributions to others"
        /*https://www.helpingwritersbecomeauthors.com/characters-goal/*/
    ],
    "FEAR":[],
    "TRIVIA":[]
}

export { DATA }