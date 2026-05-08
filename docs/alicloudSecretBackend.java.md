# `alicloudSecretBackend` Submodule <a name="`alicloudSecretBackend` Submodule" id="@cdktn/provider-vault.alicloudSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackend <a name="AlicloudSecretBackend" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend vault_alicloud_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackend;

AlicloudSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessKey(java.lang.String)
    .mount(java.lang.String)
    .secretKeyWo(java.lang.String)
    .secretKeyWoVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AliCloud Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the AliCloud secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.secretKeyWo">secretKeyWo</a></code> | <code>java.lang.String</code> | Write-only AliCloud Secret Access Key. This value will never be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.secretKeyWoVersion">secretKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only `secret_key_wo` field. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

The AliCloud Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#access_key AlicloudSecretBackend#access_key}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the AliCloud secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "alicloud"`. Use `vault_mount.alicloud.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#mount AlicloudSecretBackend#mount}

---

##### `secretKeyWo`<sup>Required</sup> <a name="secretKeyWo" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.secretKeyWo"></a>

- *Type:* java.lang.String

Write-only AliCloud Secret Access Key. This value will never be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#secret_key_wo AlicloudSecretBackend#secret_key_wo}

---

##### `secretKeyWoVersion`<sup>Required</sup> <a name="secretKeyWoVersion" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.secretKeyWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only `secret_key_wo` field.

Incrementing this value will trigger an update to the secret key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#secret_key_wo_version AlicloudSecretBackend#secret_key_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#namespace AlicloudSecretBackend#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AlicloudSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isConstruct"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackend;

AlicloudSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackend;

AlicloudSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackend;

AlicloudSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackend;

AlicloudSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlicloudSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AlicloudSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlicloudSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlicloudSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoInput">secretKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoVersionInput">secretKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWo">secretKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoVersion">secretKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `secretKeyWoInput`<sup>Optional</sup> <a name="secretKeyWoInput" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoInput"></a>

```java
public java.lang.String getSecretKeyWoInput();
```

- *Type:* java.lang.String

---

##### `secretKeyWoVersionInput`<sup>Optional</sup> <a name="secretKeyWoVersionInput" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoVersionInput"></a>

```java
public java.lang.Number getSecretKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `secretKeyWo`<sup>Required</sup> <a name="secretKeyWo" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWo"></a>

```java
public java.lang.String getSecretKeyWo();
```

- *Type:* java.lang.String

---

##### `secretKeyWoVersion`<sup>Required</sup> <a name="secretKeyWoVersion" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.secretKeyWoVersion"></a>

```java
public java.lang.Number getSecretKeyWoVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendConfig <a name="AlicloudSecretBackendConfig" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend.AlicloudSecretBackendConfig;

AlicloudSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessKey(java.lang.String)
    .mount(java.lang.String)
    .secretKeyWo(java.lang.String)
    .secretKeyWoVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AliCloud Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the AliCloud secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.secretKeyWo">secretKeyWo</a></code> | <code>java.lang.String</code> | Write-only AliCloud Secret Access Key. This value will never be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.secretKeyWoVersion">secretKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only `secret_key_wo` field. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The AliCloud Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#access_key AlicloudSecretBackend#access_key}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the AliCloud secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "alicloud"`. Use `vault_mount.alicloud.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#mount AlicloudSecretBackend#mount}

---

##### `secretKeyWo`<sup>Required</sup> <a name="secretKeyWo" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.secretKeyWo"></a>

```java
public java.lang.String getSecretKeyWo();
```

- *Type:* java.lang.String

Write-only AliCloud Secret Access Key. This value will never be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#secret_key_wo AlicloudSecretBackend#secret_key_wo}

---

##### `secretKeyWoVersion`<sup>Required</sup> <a name="secretKeyWoVersion" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.secretKeyWoVersion"></a>

```java
public java.lang.Number getSecretKeyWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only `secret_key_wo` field.

Incrementing this value will trigger an update to the secret key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#secret_key_wo_version AlicloudSecretBackend#secret_key_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackend.AlicloudSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend#namespace AlicloudSecretBackend#namespace}

---



