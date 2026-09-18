# `transformTransformationTokenization` Submodule <a name="`transformTransformationTokenization` Submodule" id="@cdktn/provider-vault.transformTransformationTokenization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenization <a name="TransformTransformationTokenization" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenization;

TransformTransformationTokenization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .convergent(java.lang.Boolean|IResolvable)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .mappingMode(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .stores(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of allowed roles that this transformation can be assigned to. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.convergent">convergent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, this transform can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | Specifies the mapping mode for stored tokenization values. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

Specifies a list of allowed roles that this transformation can be assigned to.

A role using this transformation must exist in this list in order for encode and decode operations to properly function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}

---

##### `convergent`<sup>Optional</sup> <a name="convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.convergent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token.

Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, this transform can be deleted.

Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.mappingMode"></a>

- *Type:* java.lang.String

Specifies the mapping mode for stored tokenization values.

default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.stores"></a>

- *Type:* java.util.List<java.lang.String>

The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent">resetConvergent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode">resetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores">resetStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetConvergent` <a name="resetConvergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent"></a>

```java
public void resetConvergent()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId"></a>

```java
public void resetId()
```

##### `resetMappingMode` <a name="resetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode"></a>

```java
public void resetMappingMode()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetStores` <a name="resetStores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores"></a>

```java
public void resetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenization;

TransformTransformationTokenization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenization;

TransformTransformationTokenization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenization;

TransformTransformationTokenization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenization;

TransformTransformationTokenization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformTransformationTokenization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformTransformationTokenization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformTransformationTokenization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput">convergentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput">mappingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput">storesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent">convergent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `convergentInput`<sup>Optional</sup> <a name="convergentInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput"></a>

```java
public java.lang.Boolean|IResolvable getConvergentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mappingModeInput`<sup>Optional</sup> <a name="mappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput"></a>

```java
public java.lang.String getMappingModeInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `storesInput`<sup>Optional</sup> <a name="storesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput"></a>

```java
public java.util.List<java.lang.String> getStoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `convergent`<sup>Required</sup> <a name="convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent"></a>

```java
public java.lang.Boolean|IResolvable getConvergent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mappingMode`<sup>Required</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode"></a>

```java
public java.lang.String getMappingMode();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `stores`<sup>Required</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores"></a>

```java
public java.util.List<java.lang.String> getStores();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationConfig <a name="TransformTransformationTokenizationConfig" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization.TransformTransformationTokenizationConfig;

TransformTransformationTokenizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .convergent(java.lang.Boolean|IResolvable)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .mappingMode(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .stores(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of allowed roles that this transformation can be assigned to. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent">convergent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, this transform can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | Specifies the mapping mode for stored tokenization values. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of allowed roles that this transformation can be assigned to.

A role using this transformation must exist in this list in order for encode and decode operations to properly function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}

---

##### `convergent`<sup>Optional</sup> <a name="convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent"></a>

```java
public java.lang.Boolean|IResolvable getConvergent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token.

Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, this transform can be deleted.

Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode"></a>

```java
public java.lang.String getMappingMode();
```

- *Type:* java.lang.String

Specifies the mapping mode for stored tokenization values.

default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores"></a>

```java
public java.util.List<java.lang.String> getStores();
```

- *Type:* java.util.List<java.lang.String>

The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}

---



