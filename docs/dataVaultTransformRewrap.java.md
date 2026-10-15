# `dataVaultTransformRewrap` Submodule <a name="`dataVaultTransformRewrap` Submodule" id="@cdktn/provider-vault.dataVaultTransformRewrap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformRewrap <a name="DataVaultTransformRewrap" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap vault_transform_rewrap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrap;

DataVaultTransformRewrap.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
    .roleName(java.lang.String)
//  .batchInput(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodeTransformation(java.lang.String)
//  .decodeTweak(java.lang.String)
//  .encodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTransformation">decodeTransformation</a></code> | <code>java.lang.String</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTweak">decodeTweak</a></code> | <code>java.lang.String</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.transformation">transformation</a></code> | <code>java.lang.String</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value to rewrap. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.batchInput"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `decodeTransformation`<sup>Optional</sup> <a name="decodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTransformation"></a>

- *Type:* java.lang.String

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `decodeTweak`<sup>Optional</sup> <a name="decodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTweak"></a>

- *Type:* java.lang.String

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.encodedValue"></a>

- *Type:* java.lang.String

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.transformation"></a>

- *Type:* java.lang.String

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.tweak"></a>

- *Type:* java.lang.String

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation">resetDecodeTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak">resetDecodeTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue">resetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetDecodeTransformation` <a name="resetDecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation"></a>

```java
public void resetDecodeTransformation()
```

##### `resetDecodeTweak` <a name="resetDecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak"></a>

```java
public void resetDecodeTweak()
```

##### `resetEncodedValue` <a name="resetEncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue"></a>

```java
public void resetEncodedValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation"></a>

```java
public void resetTransformation()
```

##### `resetTweak` <a name="resetTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak"></a>

```java
public void resetTweak()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrap;

DataVaultTransformRewrap.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrap;

DataVaultTransformRewrap.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrap;

DataVaultTransformRewrap.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrap;

DataVaultTransformRewrap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransformRewrap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransformRewrap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransformRewrap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformRewrap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults">batchResults</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput">batchInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput">decodeTransformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput">decodeTweakInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput">encodedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput">transformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput">tweakInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation">decodeTransformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak">decodeTweak</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation">transformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak">tweak</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults"></a>

```java
public StringMapList getBatchResults();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodeTransformationInput`<sup>Optional</sup> <a name="decodeTransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput"></a>

```java
public java.lang.String getDecodeTransformationInput();
```

- *Type:* java.lang.String

---

##### `decodeTweakInput`<sup>Optional</sup> <a name="decodeTweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput"></a>

```java
public java.lang.String getDecodeTweakInput();
```

- *Type:* java.lang.String

---

##### `encodedValueInput`<sup>Optional</sup> <a name="encodedValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput"></a>

```java
public java.lang.String getEncodedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput"></a>

```java
public java.lang.String getTransformationInput();
```

- *Type:* java.lang.String

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput"></a>

```java
public java.lang.String getTweakInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodeTransformation`<sup>Required</sup> <a name="decodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation"></a>

```java
public java.lang.String getDecodeTransformation();
```

- *Type:* java.lang.String

---

##### `decodeTweak`<sup>Required</sup> <a name="decodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak"></a>

```java
public java.lang.String getDecodeTweak();
```

- *Type:* java.lang.String

---

##### `encodedValue`<sup>Required</sup> <a name="encodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue"></a>

```java
public java.lang.String getEncodedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformRewrapConfig <a name="DataVaultTransformRewrapConfig" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_rewrap.DataVaultTransformRewrapConfig;

DataVaultTransformRewrapConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
    .roleName(java.lang.String)
//  .batchInput(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodeTransformation(java.lang.String)
//  .decodeTweak(java.lang.String)
//  .encodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation">decodeTransformation</a></code> | <code>java.lang.String</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak">decodeTweak</a></code> | <code>java.lang.String</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation">transformation</a></code> | <code>java.lang.String</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value to rewrap. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `decodeTransformation`<sup>Optional</sup> <a name="decodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation"></a>

```java
public java.lang.String getDecodeTransformation();
```

- *Type:* java.lang.String

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `decodeTweak`<sup>Optional</sup> <a name="decodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak"></a>

```java
public java.lang.String getDecodeTweak();
```

- *Type:* java.lang.String

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue"></a>

```java
public java.lang.String getEncodedValue();
```

- *Type:* java.lang.String

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---



