import Badge from "./shared/Badge";
import Card from "./shared/Card";

export default function Sidebar({ setPage, latestJobs, onViewJob }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__section">
        <div className="sidebar__header">
          <h2>Quick Links</h2>
        </div>
        <div className="sidebar__links">
          <button className="sidebar__link" onClick={() => setPage("jobs")}>All Jobs</button>
          <button className="sidebar__link" onClick={() => setPage("saved")}>Saved Jobs</button>
          <button className="sidebar__link" onClick={() => setPage("results")}>Results</button>
          <button className="sidebar__link" onClick={() => setPage("admit")}>Admit Cards</button>
        </div>
      </div>

      <div className="sidebar__section">
        <div className="sidebar__header">
          <h2>Latest Jobs</h2>
        </div>
        <div className="sidebar__jobs">
          {latestJobs.slice(0, 4).map((job) => (
            <Card key={job.id} onClick={() => onViewJob(job)} className="sidebar__job-card">
              <div className="sidebar__job-title">{job.emoji} {job.title}</div>
              <div className="sidebar__job-meta">{job.state} · {job.posts.toLocaleString("en-IN")} posts</div>
              <Badge type={job.badge} />
            </Card>
          ))}
        </div>
      </div>
    </aside>
  );
}
