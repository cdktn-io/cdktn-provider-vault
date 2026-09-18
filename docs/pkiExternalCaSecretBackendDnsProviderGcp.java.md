# `pkiExternalCaSecretBackendDnsProviderGcp` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderGcp` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderGcp <a name="PkiExternalCaSecretBackendDnsProviderGcp" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcp;

PkiExternalCaSecretBackendDnsProviderGcp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .credentialsWo(java.lang.String)
//  .credentialsWoVersion(java.lang.Number)
//  .impersonateServiceAccount(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .ttl(java.lang.Number)
//  .zoneName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.credentialsWo">credentialsWo</a></code> | <code>java.lang.String</code> | GCP service account credentials as JSON content. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Service account email to impersonate. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | GCP project name. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | GCP Cloud DNS zone name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.identifiers"></a>

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.credentialsWo"></a>

- *Type:* java.lang.String

GCP service account credentials as JSON content. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.credentialsWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.impersonateServiceAccount"></a>

- *Type:* java.lang.String

Service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.nameserver"></a>

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.project"></a>

- *Type:* java.lang.String

GCP project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

GCP Cloud DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo">resetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion">resetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount">resetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialsWo` <a name="resetCredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo"></a>

```java
public void resetCredentialsWo()
```

##### `resetCredentialsWoVersion` <a name="resetCredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion"></a>

```java
public void resetCredentialsWoVersion()
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount"></a>

```java
public void resetImpersonateServiceAccount()
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver"></a>

```java
public void resetNameserver()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject"></a>

```java
public void resetProject()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName"></a>

```java
public void resetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcp;

PkiExternalCaSecretBackendDnsProviderGcp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcp;

PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcp;

PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcp;

PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendDnsProviderGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput">credentialsWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput">credentialsWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput">nameserverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo">credentialsWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `credentialsWoInput`<sup>Optional</sup> <a name="credentialsWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput"></a>

```java
public java.lang.String getCredentialsWoInput();
```

- *Type:* java.lang.String

---

##### `credentialsWoVersionInput`<sup>Optional</sup> <a name="credentialsWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput"></a>

```java
public java.lang.Number getCredentialsWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput"></a>

```java
public java.lang.String getImpersonateServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput"></a>

```java
public java.lang.String getNameserverInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### ~~`credentialsWo`~~<sup>Required</sup> <a name="credentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getCredentialsWo();
```

- *Type:* java.lang.String

---

##### `credentialsWoVersion`<sup>Required</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion"></a>

```java
public java.lang.Number getCredentialsWoVersion();
```

- *Type:* java.lang.Number

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `impersonateServiceAccount`<sup>Required</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderGcpConfig <a name="PkiExternalCaSecretBackendDnsProviderGcpConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_gcp.PkiExternalCaSecretBackendDnsProviderGcpConfig;

PkiExternalCaSecretBackendDnsProviderGcpConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .credentialsWo(java.lang.String)
//  .credentialsWoVersion(java.lang.Number)
//  .impersonateServiceAccount(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .ttl(java.lang.Number)
//  .zoneName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo">credentialsWo</a></code> | <code>java.lang.String</code> | GCP service account credentials as JSON content. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Service account email to impersonate. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project">project</a></code> | <code>java.lang.String</code> | GCP project name. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | GCP Cloud DNS zone name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo"></a>

```java
public java.lang.String getCredentialsWo();
```

- *Type:* java.lang.String

GCP service account credentials as JSON content. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion"></a>

```java
public java.lang.Number getCredentialsWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

Service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

GCP project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

GCP Cloud DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}

---



