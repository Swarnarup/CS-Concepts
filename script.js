// script.js
const button = document.getElementById("toggle");
let prev = false;
function handletoggle() {

    console.log(prev)
    prev = !prev;
    const navbar = document.getElementById("navbar");
    if (prev)
        navbar.style.left = '-999px';
    else
        navbar.style.left='0px';


}
// Folder and file structure
const fileStructure = {
    "⭐Sliding Window": [
        "⭐Sliding Window/Commonly asled list - AV.pdf",
        "⭐Sliding Window/Sliding Window.pdf"
    ],
    "BIT _ Math": [
        "BIT _ Math/BIT manipulation.pdf",
        "BIT _ Math/Cumulative Mod.pdf",
        "BIT _ Math/Math extended.pdf",
    ],
    "Binary Search _ sorting": [
        "Binary Search _ sorting/Binary search - av.pdf",
        "Binary Search _ sorting/Binary search.pdf",
        "Binary Search _ sorting/Miscelleneous BS.pdf",
        "Binary Search _ sorting/Partitioning, Sorting & searching.pdf",
    ],
    "C++ STL": ["C++ STL/Cpp STL.pdf", "C++ STL/Pointers &_ from Stanford lecture.pdf"],
    "DP": [
        "DP/DP - av.pdf",
        "DP/DP practice.pdf",
        "DP/DP.pdf",
        "DP/Graph DP.pdf",
        "DP/Grid DP.pdf",
        "DP/MCM.pdf",
    ],
    "Old notes": {
        "Binary search - av.pdf": "Old notes/Binary search - av.pdf",
        "DP - av.pdf": "Old notes/DP - av.pdf",
        "Heap - av.pdf": "Old notes/Heap - av.pdf",
        "Sliding Window - av.pdf": "Old notes/Sliding Window - av.pdf",
        "Stack - av.pdf": "Old notes/Stack - av.pdf",
        "Trees - av.pdf": "Old notes/Trees - av.pdf",
        "Luv's": ["Old notes/Luv's/Luv's ig.pdf", "Old notes/Luv's/Luv's ig.pdf"],
        "csmik": [
            "Old notes/csmik/2 pointers _ Sliding Window.pdf",
            "Old notes/csmik/Design Data Structure.pdf",
            "Old notes/csmik/Greedy.pdf",
            "Old notes/csmik/Heap _ Priority Queue.pdf",
            "Old notes/csmik/Linked List.pdf",
            "Old notes/csmik/Math.pdf",
            "Old notes/csmik/Recursion _ Backtracking.pdf",
            "Old notes/csmik/STL only.pdf",
            "Old notes/csmik/Stack.pdf",
        ],
    },
    "⭐⭐Graphs + Tree Data Structures": ["⭐⭐Graphs + Tree Data Structures/Fenwick Tree.pdf",
        "⭐⭐Graphs + Tree Data Structures/Graph practice.pdf",
        "⭐⭐Graphs + Tree Data Structures/Graph.pdf",
        "⭐⭐Graphs + Tree Data Structures/Segment tree.pdf",
        "⭐⭐Graphs + Tree Data Structures/Trees.pdf",
        "⭐⭐Graphs + Tree Data Structures/Trie.pdf",
    ],
    "⭐Design and Analysis of Algorithm MIT 6.046j.pdf": "⭐Design and Analysis of Algorithm MIT 6.046j.pdf",
    "⭐Networks II.pdf": "⭐Networks II.pdf",
    "⭐String Algorithms.pdf": "⭐String Algorithms.pdf",
    "BIT manipulation cheat sheet.pdf": "BIT manipulation cheat sheet.pdf",
    "Daily_Randomly stumbled upon.pdf": "Daily_Randomly stumbled upon.pdf",
    "DBMS.pdf": "DBMS.pdf",
    "Greedy.pdf": "Greedy.pdf",
    "Hash function.pdf": "Hash function.pdf",
    "Networks.pdf": "Networks.pdf",
    "OOPs cpp.pdf": "OOPs cpp.pdf",
    "Operating System.pdf": "Operating System.pdf",
    "STL cheat sheet.pdf": "STL cheat sheet.pdf",
};

// Function to build file tree
function buildTree(container, structure, path = "./") {
    Object.entries(structure).forEach(([key, value]) => {
        const li = document.createElement("li");

        if (Array.isArray(value)) {
            li.textContent = key;
            li.classList.add("folder");

            const subUl = document.createElement("ul");
            subUl.style.display = "none";

            value.forEach((file) => {
                const fileLi = document.createElement("li");
                fileLi.textContent = file;
                fileLi.addEventListener("click", () => {
                    const filePath = `${path}/${file}`;
                    const viewer = document.getElementById("viewer");
                    viewer.data = filePath;

                    // Update fallback link
                    const fallbackLink = document.getElementById("fallback-link");
                    fallbackLink.href = filePath;
                });
                subUl.appendChild(fileLi);
            });

            li.addEventListener("click", () => {
                subUl.style.display = subUl.style.display === "none" ? "block" : "none";
            });

            li.appendChild(subUl);
        } else if (typeof value === "object") {
            li.textContent = key;
            li.classList.add("folder");

            const subUl = document.createElement("ul");
            subUl.style.display = "none";

            buildTree(subUl, value, `${path}/${key}`);

            li.addEventListener("click", () => {
                subUl.style.display = subUl.style.display === "none" ? "block" : "none";
            });

            li.appendChild(subUl);
        } else {
            li.textContent = key;
            li.addEventListener("click", () => {
                const filePath = `${path}/${key}`;
                const viewer = document.getElementById("viewer");
                viewer.src = filePath;

                // Update fallback link
                const fallbackLink = document.getElementById("fallback-link");
                fallbackLink.href = filePath;
            });
        }

        container.appendChild(li);
    });
}


// Initialize tree in sidebar
const folderList = document.querySelector(".folder-list");
buildTree(folderList, fileStructure, ".");
