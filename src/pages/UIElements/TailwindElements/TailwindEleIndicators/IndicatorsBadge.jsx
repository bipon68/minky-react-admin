import React from "react";

const IndicatorsBadge = () => {
  return (
    <div>
      <div className="grid gap-6">
        <h4 className="text-xl font-semibold">Badges</h4>
        <div className="bs-component flex gap-1">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-light">Light</span>
          <span className="badge badge-dark">Dark</span>
        </div>
        <div className="bs-component">
          <span className="badge badge-pill badge-primary">Primary</span>
          <span className="badge badge-pill badge-secondary">Secondary</span>
          <span className="badge badge-pill badge-success">Success</span>
          <span className="badge badge-pill badge-danger">Danger</span>
          <span className="badge badge-pill badge-warning">Warning</span>
          <span className="badge badge-pill badge-info">Info</span>
          <span className="badge badge-pill badge-light">Light</span>
          <span className="badge badge-pill badge-dark">Dark</span>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsBadge;
