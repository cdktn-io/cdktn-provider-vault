# `transformKeyConfiguration` Submodule <a name="`transformKeyConfiguration` Submodule" id="@cdktn/provider-vault.transformKeyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformKeyConfiguration <a name="TransformKeyConfiguration" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration vault_transform_key_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfiguration;

TransformKeyConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .autoRotatePeriod(java.lang.Number)
//  .id(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version that vault uses to decode values for the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#name TransformKeyConfiguration#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#path TransformKeyConfiguration#path}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#auto_rotate_period TransformKeyConfiguration#auto_rotate_period}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version that vault uses to decode values for the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#min_decryption_version TransformKeyConfiguration#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#namespace TransformKeyConfiguration#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod"></a>

```java
public void resetAutoRotatePeriod()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion"></a>

```java
public void resetMinDecryptionVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfiguration;

TransformKeyConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfiguration;

TransformKeyConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfiguration;

TransformKeyConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfiguration;

TransformKeyConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformKeyConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformKeyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformKeyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransformKeyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion">minAvailableVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion"></a>

```java
public java.lang.Number getMinAvailableVersion();
```

- *Type:* java.lang.Number

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput"></a>

```java
public java.lang.Number getAutoRotatePeriodInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput"></a>

```java
public java.lang.Number getMinDecryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformKeyConfigurationConfig <a name="TransformKeyConfigurationConfig" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_key_configuration.TransformKeyConfigurationConfig;

TransformKeyConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .autoRotatePeriod(java.lang.Number)
//  .id(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path">path</a></code> | <code>java.lang.String</code> | The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version that vault uses to decode values for the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#name TransformKeyConfiguration#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#path TransformKeyConfiguration#path}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#auto_rotate_period TransformKeyConfiguration#auto_rotate_period}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version that vault uses to decode values for the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#min_decryption_version TransformKeyConfiguration#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#namespace TransformKeyConfiguration#namespace}

---



