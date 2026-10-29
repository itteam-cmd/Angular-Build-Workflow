import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand"><span class="brand-mark">A</span><span>Angular<span class="muted">Flow</span></span></div>
        <div class="menu-label">WORKSPACE</div>
        <a class="nav-item active" href="#overview"><span>▦</span> Overview</a>
        <a class="nav-item" href="#projects"><span>◫</span> Projects</a>
        <a class="nav-item" href="#activity"><span>◷</span> Activity</a>
        <div class="sidebar-bottom">
          <div class="avatar">JD</div>
          <div><strong>Jamie Developer</strong><small>Demo account</small></div>
          <span class="dots">•••</span>
        </div>
      </aside>

      <main class="main-content" id="overview">
        <header class="topbar">
          <div class="crumb">Workspace <span>/</span> Overview</div>
          <div class="top-actions"><span class="status"><i></i> All systems normal</span><button class="icon-button" aria-label="Notifications">♧</button><div class="mini-avatar">JD</div></div>
        </header>

        <section class="welcome">
          <div>
            <p class="eyebrow">MONDAY, OCTOBER 26, 2026</p>
            <h1>Good morning, Jamie <span>✦</span></h1>
            <p class="subheading">Here's what's happening with your projects today.</p>
          </div>
          <button class="primary-button" (click)="showNotice()">＋ New project</button>
        </section>

        <div class="notice" *ngIf="notice">{{ notice }}</div>

        <section class="stats-grid">
          <article class="stat-card"><div class="stat-top"><span>Total projects</span><span class="stat-icon purple">▦</span></div><div class="stat-number">24</div><div class="stat-foot"><span class="positive">↗ 12.5%</span> <span>vs last month</span></div><div class="sparkline purple-line">▁▃▂▅▃▆▄▇▅▆</div></article>
          <article class="stat-card"><div class="stat-top"><span>Tasks completed</span><span class="stat-icon green">✓</span></div><div class="stat-number">186</div><div class="stat-foot"><span class="positive">↗ 8.2%</span> <span>vs last month</span></div><div class="sparkline green-line">▂▃▂▄▅▃▆▅▇▆</div></article>
          <article class="stat-card"><div class="stat-top"><span>In progress</span><span class="stat-icon orange">◷</span></div><div class="stat-number">12</div><div class="stat-foot"><span class="positive">↗ 4.3%</span> <span>vs last month</span></div><div class="sparkline orange-line">▁▂▄▃▅▄▃▆▅▇</div></article>
          <article class="stat-card"><div class="stat-top"><span>Team members</span><span class="stat-icon blue">♙</span></div><div class="stat-number">08</div><div class="stat-foot"><span class="neutral">No change</span> <span>this month</span></div><div class="sparkline blue-line">▃▃▃▄▃▃▅▅▅▆</div></article>
        </section>

        <section class="content-grid">
          <article class="panel projects-panel" id="projects">
            <div class="panel-heading"><div><h2>Recent projects</h2><p>Keep track of your team's work</p></div><button class="text-button" (click)="showAll()">View all →</button></div>
            <div class="project-table">
              <div class="table-row table-head"><span>PROJECT</span><span>STATUS</span><span>PROGRESS</span><span>DUE DATE</span></div>
              <div class="table-row" *ngFor="let project of projects"><div class="project-name"><span class="project-symbol" [ngClass]="project.color">{{ project.symbol }}</span><div><strong>{{ project.name }}</strong><small>{{ project.category }}</small></div></div><span><i class="pill" [ngClass]="project.statusClass">{{ project.status }}</i></span><div class="progress-wrap"><div class="progress-track"><div class="progress-fill" [style.width.%]="project.progress" [ngClass]="project.color"></div></div><small>{{ project.progress }}%</small></div><span class="due-date">{{ project.due }}</span></div>
            </div>
          </article>

          <article class="panel activity-panel" id="activity">
            <div class="panel-heading"><div><h2>Recent activity</h2><p>Latest updates from your team</p></div><button class="more-button" aria-label="More activity">•••</button></div>
            <div class="activity-list">
              <div class="activity-item"><div class="activity-avatar lavender">AM</div><div><p><strong>Alex Morgan</strong> completed a task</p><small>Updated landing page design</small><time>12 minutes ago</time></div></div>
              <div class="activity-item"><div class="activity-avatar mint">SC</div><div><p><strong>Sam Chen</strong> created a project</p><small>Mobile app redesign</small><time>48 minutes ago</time></div></div>
              <div class="activity-item"><div class="activity-avatar peach">JR</div><div><p><strong>Jordan Rivera</strong> left a comment</p><small>“Looks great, ready for review!”</small><time>2 hours ago</time></div></div>
              <div class="activity-item"><div class="activity-avatar sky">TK</div><div><p><strong>Taylor Kim</strong> updated status</p><small>API integration · In progress</small><time>4 hours ago</time></div></div>
            </div>
          </article>
        </section>
        <footer>© 2026 AngularFlow Demo <span>Built with Angular · Ready for GitHub</span></footer>
      </main>
    </div>
  `
})
export class AppComponent {
  notice = '';
  projects = [
    { name: 'Website redesign', category: 'Design & development', status: 'In progress', statusClass: 'in-progress', progress: 72, due: 'Oct 30, 2026', symbol: '✦', color: 'violet' },
    { name: 'Mobile application', category: 'Product development', status: 'In review', statusClass: 'in-review', progress: 88, due: 'Nov 02, 2026', symbol: '▣', color: 'teal' },
    { name: 'Marketing campaign', category: 'Marketing', status: 'Planning', statusClass: 'planning', progress: 35, due: 'Nov 08, 2026', symbol: '↗', color: 'amber' },
    { name: 'API integration', category: 'Engineering', status: 'In progress', statusClass: 'in-progress', progress: 54, due: 'Nov 12, 2026', symbol: '⌘', color: 'blue' }
  ];
  showNotice() { this.notice = 'Demo mode: your new project form would open here.'; }
  showAll() { this.notice = 'Showing all 4 sample projects in this demo.'; }
}

bootstrapApplication(AppComponent).catch(err => console.error(err));
