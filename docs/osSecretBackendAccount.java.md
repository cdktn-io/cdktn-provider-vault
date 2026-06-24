# `osSecretBackendAccount` Submodule <a name="`osSecretBackendAccount` Submodule" id="@cdktn/provider-vault.osSecretBackendAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendAccount <a name="OsSecretBackendAccount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account vault_os_secret_backend_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccount;

OsSecretBackendAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .host(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
    .passwordWo(java.lang.String)
    .username(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .parentAccountRef(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .verifyConnection(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.parentAccountRef">parentAccountRef</a></code> | <code>java.lang.String</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordWo"></a>

- *Type:* java.lang.String

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.customMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `parentAccountRef`<sup>Optional</sup> <a name="parentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.parentAccountRef"></a>

- *Type:* java.lang.String

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.verifyConnection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef">resetParentAccountRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation"></a>

```java
public void resetDisableAutomatedRotation()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParentAccountRef` <a name="resetParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef"></a>

```java
public void resetParentAccountRef()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection"></a>

```java
public void resetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccount;

OsSecretBackendAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccount;

OsSecretBackendAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccount;

OsSecretBackendAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccount;

OsSecretBackendAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsSecretBackendAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsSecretBackendAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsSecretBackendAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation">lastVaultRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation">nextVaultRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput">customMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput">parentAccountRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput">passwordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef">parentAccountRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `lastVaultRotation`<sup>Required</sup> <a name="lastVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation"></a>

```java
public java.lang.String getLastVaultRotation();
```

- *Type:* java.lang.String

---

##### `nextVaultRotation`<sup>Required</sup> <a name="nextVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation"></a>

```java
public java.lang.String getNextVaultRotation();
```

- *Type:* java.lang.String

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `parentAccountRefInput`<sup>Optional</sup> <a name="parentAccountRefInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput"></a>

```java
public java.lang.String getParentAccountRefInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput"></a>

```java
public java.lang.String getPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput"></a>

```java
public java.lang.Boolean|IResolvable getVerifyConnectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `parentAccountRef`<sup>Required</sup> <a name="parentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef"></a>

```java
public java.lang.String getParentAccountRef();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection"></a>

```java
public java.lang.Boolean|IResolvable getVerifyConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendAccountConfig <a name="OsSecretBackendAccountConfig" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_account.OsSecretBackendAccountConfig;

OsSecretBackendAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .host(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
    .passwordWo(java.lang.String)
    .username(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .parentAccountRef(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .verifyConnection(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host">host</a></code> | <code>java.lang.String</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef">parentAccountRef</a></code> | <code>java.lang.String</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `parentAccountRef`<sup>Optional</sup> <a name="parentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef"></a>

```java
public java.lang.String getParentAccountRef();
```

- *Type:* java.lang.String

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection"></a>

```java
public java.lang.Boolean|IResolvable getVerifyConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---



