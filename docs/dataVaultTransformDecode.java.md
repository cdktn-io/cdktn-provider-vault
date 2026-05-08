# `dataVaultTransformDecode` Submodule <a name="`dataVaultTransformDecode` Submodule" id="@cdktn/provider-vault.dataVaultTransformDecode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformDecode <a name="DataVaultTransformDecode" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode vault_transform_decode}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.Builder.create(Construct scope, java.lang.String id)
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
//  .batchResults(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchResults">batchResults</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The result of decoding batch_input. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | The result of decoding a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value in which to decode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchInput"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchResults"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `decodedValue`<sup>Optional</sup> <a name="decodedValue" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.decodedValue"></a>

- *Type:* java.lang.String

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.transformation"></a>

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.tweak"></a>

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue">resetDecodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetDecodedValue` <a name="resetDecodedValue" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue"></a>

```java
public void resetDecodedValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation"></a>

```java
public void resetTransformation()
```

##### `resetTweak` <a name="resetTweak" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak"></a>

```java
public void resetTweak()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformDecode resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransformDecode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultTransformDecode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransformDecode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransformDecode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformDecode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput">batchInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput">batchResultsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput">decodedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput">transformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput">tweakInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults">batchResults</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation">transformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak">tweak</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResultsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodedValueInput`<sup>Optional</sup> <a name="decodedValueInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput"></a>

```java
public java.lang.String getDecodedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput"></a>

```java
public java.lang.String getTransformationInput();
```

- *Type:* java.lang.String

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput"></a>

```java
public java.lang.String getTweakInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodedValue`<sup>Required</sup> <a name="decodedValue" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue"></a>

```java
public java.lang.String getDecodedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformDecodeConfig <a name="DataVaultTransformDecodeConfig" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transform_decode.DataVaultTransformDecodeConfig;

DataVaultTransformDecodeConfig.builder()
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
//  .batchResults(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodedValue(java.lang.String)
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
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults">batchResults</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The result of decoding batch_input. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | The result of decoding a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value in which to decode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `decodedValue`<sup>Optional</sup> <a name="decodedValue" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue"></a>

```java
public java.lang.String getDecodedValue();
```

- *Type:* java.lang.String

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---



