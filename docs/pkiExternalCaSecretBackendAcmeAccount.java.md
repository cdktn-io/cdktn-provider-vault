# `pkiExternalCaSecretBackendAcmeAccount` Submodule <a name="`pkiExternalCaSecretBackendAcmeAccount` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendAcmeAccount <a name="PkiExternalCaSecretBackendAcmeAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account vault_pki_external_ca_secret_backend_acme_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccount;

PkiExternalCaSecretBackendAcmeAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryUrl(java.lang.String)
    .emailContacts(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .eabKey(java.lang.String)
//  .eabKid(java.lang.String)
//  .keyType(java.lang.String)
//  .namespace(java.lang.String)
//  .trustedCa(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.directoryUrl">directoryUrl</a></code> | <code>java.lang.String</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.emailContacts">emailContacts</a></code> | <code>java.util.List<java.lang.String></code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.eabKey">eabKey</a></code> | <code>java.lang.String</code> | An url base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.eabKid">eabKid</a></code> | <code>java.lang.String</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.trustedCa">trustedCa</a></code> | <code>java.lang.String</code> | Trusted CA certificates for the ACME server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryUrl`<sup>Required</sup> <a name="directoryUrl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.directoryUrl"></a>

- *Type:* java.lang.String

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#directory_url PkiExternalCaSecretBackendAcmeAccount#directory_url}

---

##### `emailContacts`<sup>Required</sup> <a name="emailContacts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.emailContacts"></a>

- *Type:* java.util.List<java.lang.String>

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#email_contacts PkiExternalCaSecretBackendAcmeAccount#email_contacts}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#mount PkiExternalCaSecretBackendAcmeAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#name PkiExternalCaSecretBackendAcmeAccount#name}

---

##### `eabKey`<sup>Optional</sup> <a name="eabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.eabKey"></a>

- *Type:* java.lang.String

An url base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_key PkiExternalCaSecretBackendAcmeAccount#eab_key}

---

##### `eabKid`<sup>Optional</sup> <a name="eabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.eabKid"></a>

- *Type:* java.lang.String

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_kid PkiExternalCaSecretBackendAcmeAccount#eab_kid}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#key_type PkiExternalCaSecretBackendAcmeAccount#key_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#namespace PkiExternalCaSecretBackendAcmeAccount#namespace}

---

##### `trustedCa`<sup>Optional</sup> <a name="trustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.trustedCa"></a>

- *Type:* java.lang.String

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#trusted_ca PkiExternalCaSecretBackendAcmeAccount#trusted_ca}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKey">resetEabKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKid">resetEabKid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetTrustedCa">resetTrustedCa</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEabKey` <a name="resetEabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKey"></a>

```java
public void resetEabKey()
```

##### `resetEabKid` <a name="resetEabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKid"></a>

```java
public void resetEabKid()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTrustedCa` <a name="resetTrustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetTrustedCa"></a>

```java
public void resetTrustedCa()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccount;

PkiExternalCaSecretBackendAcmeAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccount;

PkiExternalCaSecretBackendAcmeAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccount;

PkiExternalCaSecretBackendAcmeAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccount;

PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendAcmeAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendAcmeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendAcmeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrlInput">directoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKeyInput">eabKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKidInput">eabKidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContactsInput">emailContactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCaInput">trustedCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrl">directoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKey">eabKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKid">eabKid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContacts">emailContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCa">trustedCa</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.activeKeyVersion"></a>

```java
public java.lang.Number getActiveKeyVersion();
```

- *Type:* java.lang.Number

---

##### `directoryUrlInput`<sup>Optional</sup> <a name="directoryUrlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrlInput"></a>

```java
public java.lang.String getDirectoryUrlInput();
```

- *Type:* java.lang.String

---

##### `eabKeyInput`<sup>Optional</sup> <a name="eabKeyInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKeyInput"></a>

```java
public java.lang.String getEabKeyInput();
```

- *Type:* java.lang.String

---

##### `eabKidInput`<sup>Optional</sup> <a name="eabKidInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKidInput"></a>

```java
public java.lang.String getEabKidInput();
```

- *Type:* java.lang.String

---

##### `emailContactsInput`<sup>Optional</sup> <a name="emailContactsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContactsInput"></a>

```java
public java.util.List<java.lang.String> getEmailContactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `trustedCaInput`<sup>Optional</sup> <a name="trustedCaInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCaInput"></a>

```java
public java.lang.String getTrustedCaInput();
```

- *Type:* java.lang.String

---

##### `directoryUrl`<sup>Required</sup> <a name="directoryUrl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrl"></a>

```java
public java.lang.String getDirectoryUrl();
```

- *Type:* java.lang.String

---

##### `eabKey`<sup>Required</sup> <a name="eabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKey"></a>

```java
public java.lang.String getEabKey();
```

- *Type:* java.lang.String

---

##### `eabKid`<sup>Required</sup> <a name="eabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKid"></a>

```java
public java.lang.String getEabKid();
```

- *Type:* java.lang.String

---

##### `emailContacts`<sup>Required</sup> <a name="emailContacts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContacts"></a>

```java
public java.util.List<java.lang.String> getEmailContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `trustedCa`<sup>Required</sup> <a name="trustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCa"></a>

```java
public java.lang.String getTrustedCa();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendAcmeAccountConfig <a name="PkiExternalCaSecretBackendAcmeAccountConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_acme_account.PkiExternalCaSecretBackendAcmeAccountConfig;

PkiExternalCaSecretBackendAcmeAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryUrl(java.lang.String)
    .emailContacts(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .eabKey(java.lang.String)
//  .eabKid(java.lang.String)
//  .keyType(java.lang.String)
//  .namespace(java.lang.String)
//  .trustedCa(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.directoryUrl">directoryUrl</a></code> | <code>java.lang.String</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.emailContacts">emailContacts</a></code> | <code>java.util.List<java.lang.String></code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKey">eabKey</a></code> | <code>java.lang.String</code> | An url base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKid">eabKid</a></code> | <code>java.lang.String</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.trustedCa">trustedCa</a></code> | <code>java.lang.String</code> | Trusted CA certificates for the ACME server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryUrl`<sup>Required</sup> <a name="directoryUrl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.directoryUrl"></a>

```java
public java.lang.String getDirectoryUrl();
```

- *Type:* java.lang.String

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#directory_url PkiExternalCaSecretBackendAcmeAccount#directory_url}

---

##### `emailContacts`<sup>Required</sup> <a name="emailContacts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.emailContacts"></a>

```java
public java.util.List<java.lang.String> getEmailContacts();
```

- *Type:* java.util.List<java.lang.String>

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#email_contacts PkiExternalCaSecretBackendAcmeAccount#email_contacts}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#mount PkiExternalCaSecretBackendAcmeAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#name PkiExternalCaSecretBackendAcmeAccount#name}

---

##### `eabKey`<sup>Optional</sup> <a name="eabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKey"></a>

```java
public java.lang.String getEabKey();
```

- *Type:* java.lang.String

An url base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_key PkiExternalCaSecretBackendAcmeAccount#eab_key}

---

##### `eabKid`<sup>Optional</sup> <a name="eabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKid"></a>

```java
public java.lang.String getEabKid();
```

- *Type:* java.lang.String

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_kid PkiExternalCaSecretBackendAcmeAccount#eab_kid}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#key_type PkiExternalCaSecretBackendAcmeAccount#key_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#namespace PkiExternalCaSecretBackendAcmeAccount#namespace}

---

##### `trustedCa`<sup>Optional</sup> <a name="trustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.trustedCa"></a>

```java
public java.lang.String getTrustedCa();
```

- *Type:* java.lang.String

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#trusted_ca PkiExternalCaSecretBackendAcmeAccount#trusted_ca}

---



