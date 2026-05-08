# `osSecretBackendHost` Submodule <a name="`osSecretBackendHost` Submodule" id="@cdktn/provider-vault.osSecretBackendHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendHost <a name="OsSecretBackendHost" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host vault_os_secret_backend_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHost;

OsSecretBackendHost.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .port(java.lang.Number)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .sshHostKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.sshHostKey">sshHostKey</a></code> | <code>java.lang.String</code> | SSH host key for the host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.customMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `sshHostKey`<sup>Optional</sup> <a name="sshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.sshHostKey"></a>

- *Type:* java.lang.String

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey">resetSshHostKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation"></a>

```java
public void resetDisableAutomatedRotation()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort"></a>

```java
public void resetPort()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

##### `resetSshHostKey` <a name="resetSshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey"></a>

```java
public void resetSshHostKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHost;

OsSecretBackendHost.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHost;

OsSecretBackendHost.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHost;

OsSecretBackendHost.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHost;

OsSecretBackendHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsSecretBackendHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsSecretBackendHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsSecretBackendHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput">customMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput">sshHostKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey">sshHostKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `sshHostKeyInput`<sup>Optional</sup> <a name="sshHostKeyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput"></a>

```java
public java.lang.String getSshHostKeyInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `sshHostKey`<sup>Required</sup> <a name="sshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey"></a>

```java
public java.lang.String getSshHostKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendHostConfig <a name="OsSecretBackendHostConfig" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.os_secret_backend_host.OsSecretBackendHostConfig;

OsSecretBackendHostConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .port(java.lang.Number)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .sshHostKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address">address</a></code> | <code>java.lang.String</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey">sshHostKey</a></code> | <code>java.lang.String</code> | SSH host key for the host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `sshHostKey`<sup>Optional</sup> <a name="sshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey"></a>

```java
public java.lang.String getSshHostKey();
```

- *Type:* java.lang.String

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---



