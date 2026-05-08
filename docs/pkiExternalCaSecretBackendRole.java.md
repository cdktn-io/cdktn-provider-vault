# `pkiExternalCaSecretBackendRole` Submodule <a name="`pkiExternalCaSecretBackendRole` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendRole <a name="PkiExternalCaSecretBackendRole" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role vault_pki_external_ca_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRole;

PkiExternalCaSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acmeAccountName(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .allowedChallengeTypes(java.util.List<java.lang.String>)
//  .allowedDomainOptions(java.util.List<java.lang.String>)
//  .allowedDomains(java.util.List<java.lang.String>)
//  .csrGenerateKeyType(java.lang.String)
//  .csrIdentifierPopulation(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.acmeAccountName">acmeAccountName</a></code> | <code>java.lang.String</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedChallengeTypes">allowedChallengeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedDomainOptions">allowedDomainOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.csrGenerateKeyType">csrGenerateKeyType</a></code> | <code>java.lang.String</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.csrIdentifierPopulation">csrIdentifierPopulation</a></code> | <code>java.lang.String</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acmeAccountName`<sup>Required</sup> <a name="acmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.acmeAccountName"></a>

- *Type:* java.lang.String

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#acme_account_name PkiExternalCaSecretBackendRole#acme_account_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#mount PkiExternalCaSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#name PkiExternalCaSecretBackendRole#name}

---

##### `allowedChallengeTypes`<sup>Optional</sup> <a name="allowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedChallengeTypes"></a>

- *Type:* java.util.List<java.lang.String>

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_challenge_types PkiExternalCaSecretBackendRole#allowed_challenge_types}

---

##### `allowedDomainOptions`<sup>Optional</sup> <a name="allowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedDomainOptions"></a>

- *Type:* java.util.List<java.lang.String>

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domain_options PkiExternalCaSecretBackendRole#allowed_domain_options}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.allowedDomains"></a>

- *Type:* java.util.List<java.lang.String>

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domains PkiExternalCaSecretBackendRole#allowed_domains}

---

##### `csrGenerateKeyType`<sup>Optional</sup> <a name="csrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.csrGenerateKeyType"></a>

- *Type:* java.lang.String

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#csr_generate_key_type PkiExternalCaSecretBackendRole#csr_generate_key_type}

---

##### `csrIdentifierPopulation`<sup>Optional</sup> <a name="csrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.csrIdentifierPopulation"></a>

- *Type:* java.lang.String

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#csr_identifier_population PkiExternalCaSecretBackendRole#csr_identifier_population}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#force PkiExternalCaSecretBackendRole#force}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#namespace PkiExternalCaSecretBackendRole#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes">resetAllowedChallengeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions">resetAllowedDomainOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType">resetCsrGenerateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation">resetCsrIdentifierPopulation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedChallengeTypes` <a name="resetAllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes"></a>

```java
public void resetAllowedChallengeTypes()
```

##### `resetAllowedDomainOptions` <a name="resetAllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions"></a>

```java
public void resetAllowedDomainOptions()
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains"></a>

```java
public void resetAllowedDomains()
```

##### `resetCsrGenerateKeyType` <a name="resetCsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType"></a>

```java
public void resetCsrGenerateKeyType()
```

##### `resetCsrIdentifierPopulation` <a name="resetCsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation"></a>

```java
public void resetCsrIdentifierPopulation()
```

##### `resetForce` <a name="resetForce" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce"></a>

```java
public void resetForce()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRole;

PkiExternalCaSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRole;

PkiExternalCaSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRole;

PkiExternalCaSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRole;

PkiExternalCaSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate">lastUpdateDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput">acmeAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput">allowedChallengeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput">allowedDomainOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput">csrGenerateKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput">csrIdentifierPopulationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName">acmeAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes">allowedChallengeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions">allowedDomainOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType">csrGenerateKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation">csrIdentifierPopulation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate"></a>

```java
public java.lang.String getLastUpdateDate();
```

- *Type:* java.lang.String

---

##### `acmeAccountNameInput`<sup>Optional</sup> <a name="acmeAccountNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput"></a>

```java
public java.lang.String getAcmeAccountNameInput();
```

- *Type:* java.lang.String

---

##### `allowedChallengeTypesInput`<sup>Optional</sup> <a name="allowedChallengeTypesInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedChallengeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomainOptionsInput`<sup>Optional</sup> <a name="allowedDomainOptionsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `csrGenerateKeyTypeInput`<sup>Optional</sup> <a name="csrGenerateKeyTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput"></a>

```java
public java.lang.String getCsrGenerateKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `csrIdentifierPopulationInput`<sup>Optional</sup> <a name="csrIdentifierPopulationInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput"></a>

```java
public java.lang.String getCsrIdentifierPopulationInput();
```

- *Type:* java.lang.String

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput"></a>

```java
public java.lang.Boolean|IResolvable getForceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `acmeAccountName`<sup>Required</sup> <a name="acmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName"></a>

```java
public java.lang.String getAcmeAccountName();
```

- *Type:* java.lang.String

---

##### `allowedChallengeTypes`<sup>Required</sup> <a name="allowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedChallengeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomainOptions`<sup>Required</sup> <a name="allowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `csrGenerateKeyType`<sup>Required</sup> <a name="csrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType"></a>

```java
public java.lang.String getCsrGenerateKeyType();
```

- *Type:* java.lang.String

---

##### `csrIdentifierPopulation`<sup>Required</sup> <a name="csrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation"></a>

```java
public java.lang.String getCsrIdentifierPopulation();
```

- *Type:* java.lang.String

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendRoleConfig <a name="PkiExternalCaSecretBackendRoleConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_role.PkiExternalCaSecretBackendRoleConfig;

PkiExternalCaSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acmeAccountName(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .allowedChallengeTypes(java.util.List<java.lang.String>)
//  .allowedDomainOptions(java.util.List<java.lang.String>)
//  .allowedDomains(java.util.List<java.lang.String>)
//  .csrGenerateKeyType(java.lang.String)
//  .csrIdentifierPopulation(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName">acmeAccountName</a></code> | <code>java.lang.String</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes">allowedChallengeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions">allowedDomainOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType">csrGenerateKeyType</a></code> | <code>java.lang.String</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation">csrIdentifierPopulation</a></code> | <code>java.lang.String</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force">force</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acmeAccountName`<sup>Required</sup> <a name="acmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName"></a>

```java
public java.lang.String getAcmeAccountName();
```

- *Type:* java.lang.String

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#acme_account_name PkiExternalCaSecretBackendRole#acme_account_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#mount PkiExternalCaSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#name PkiExternalCaSecretBackendRole#name}

---

##### `allowedChallengeTypes`<sup>Optional</sup> <a name="allowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedChallengeTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_challenge_types PkiExternalCaSecretBackendRole#allowed_challenge_types}

---

##### `allowedDomainOptions`<sup>Optional</sup> <a name="allowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domain_options PkiExternalCaSecretBackendRole#allowed_domain_options}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domains PkiExternalCaSecretBackendRole#allowed_domains}

---

##### `csrGenerateKeyType`<sup>Optional</sup> <a name="csrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType"></a>

```java
public java.lang.String getCsrGenerateKeyType();
```

- *Type:* java.lang.String

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#csr_generate_key_type PkiExternalCaSecretBackendRole#csr_generate_key_type}

---

##### `csrIdentifierPopulation`<sup>Optional</sup> <a name="csrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation"></a>

```java
public java.lang.String getCsrIdentifierPopulation();
```

- *Type:* java.lang.String

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#csr_identifier_population PkiExternalCaSecretBackendRole#csr_identifier_population}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#force PkiExternalCaSecretBackendRole#force}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_role#namespace PkiExternalCaSecretBackendRole#namespace}

---



