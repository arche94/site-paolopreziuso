# Project Config

**Project:** site-paolopreziuso
**Updated:** 2026-04-23

## Project Settings

```yaml
project:
  name: site-paolopreziuso
  version: 0.0.0
```

## Integrations

### SonarQube

```yaml
sonarqube:
  enabled: false
  project_key: site-paolopreziuso
```

### Enterprise Plan Audit

```yaml
enterprise_plan_audit:
  enabled: false
```

## Domains

Domains group related skills and surface automatically when recall keywords appear in user messages.

### TESTING

```yaml
domains:
  testing:
    enabled: true
    recall_keywords:
      - "run tests"
      - "test coverage"
      - "write tests"
      - "playwright"
    skills:
      - paul:verify
```

## Preferences

```yaml
preferences:
  auto_commit: false
  verbose_output: false
```

---
*Config updated: 2026-04-23*
