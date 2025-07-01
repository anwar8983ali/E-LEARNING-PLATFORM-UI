document.addEventListener("DOMContentLoaded", () => {
  const checks = document.querySelectorAll(".lesson-check");
  const progressBar = document.getElementById("progress-bar-fill");
  const progressText = document.getElementById("progress-percent");

  function updateProgress() {
    const total = checks.length;
    const completed = Array.from(checks).filter(c => c.checked).length;
    const percent = Math.round((completed / total) * 100);
    if (progressBar) progressBar.style.width = percent + "%";
    if (progressText) progressText.textContent = percent + "%";
  }

  if (checks.length > 0) {
    checks.forEach(check => check.addEventListener("change", updateProgress));
    updateProgress();
  }

  // Video lesson loader
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("lesson");

  const lessons = {
    1: { title: "Introduction to HTML", desc: "Learn what HTML is.", youtubeId: "UB1O30fR-EE" },
    2: { title: "HTML Tags and Structure", desc: "Basic tags and structure.", youtubeId: "qz0aGYrrlhU" },
    3: { title: "Forms and Inputs", desc: "Build forms in HTML.", youtubeId: "2JUuP_KHiwQ" },
    4: { title: "Media and Embedding", desc: "Embed media in pages.", youtubeId: "7GzPAQ7g7KQ" },
    5: { title: "Semantic HTML", desc: "Use meaningful HTML.", youtubeId: "Gx1dgcT1bS0" }
  };

  const lesson = lessons[lessonId];
  if (lesson) {
    document.getElementById("lesson-title").innerText = lesson.title;
    document.getElementById("lesson-desc").innerText = lesson.desc;
    document.getElementById("video-player").innerHTML = `
      <iframe src="https://www.youtube.com/embed/${lesson.youtubeId}" 
        frameborder="0" allowfullscreen></iframe>`;
  } else if (window.location.href.includes("video.html")) {
    document.body.innerHTML = "<h2 style='text-align:center;'>Lesson not found</h2>";
  }
});

