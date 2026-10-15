# `dataVaultTransformRewrap` Submodule <a name="`dataVaultTransformRewrap` Submodule" id="@cdktn/provider-vault.dataVaultTransformRewrap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformRewrap <a name="DataVaultTransformRewrap" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap vault_transform_rewrap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultTransformRewrap(Construct Scope, string Id, DataVaultTransformRewrapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation">ResetDecodeTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak">ResetDecodeTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue">ResetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation">ResetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak">ResetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetDecodeTransformation` <a name="ResetDecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation"></a>

```csharp
private void ResetDecodeTransformation()
```

##### `ResetDecodeTweak` <a name="ResetDecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak"></a>

```csharp
private void ResetDecodeTweak()
```

##### `ResetEncodedValue` <a name="ResetEncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue"></a>

```csharp
private void ResetEncodedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation"></a>

```csharp
private void ResetTransformation()
```

##### `ResetTweak` <a name="ResetTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak"></a>

```csharp
private void ResetTweak()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformRewrap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformRewrap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformRewrap.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformRewrap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransformRewrap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransformRewrap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformRewrap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults">BatchResults</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput">BatchInputInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput">DecodeTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput">DecodeTweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput">EncodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput">TransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput">TweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput">BatchInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation">DecodeTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak">DecodeTweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue">EncodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation">Transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak">Tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults"></a>

```csharp
public StringMapList BatchResults { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `DecodeTransformationInput`<sup>Optional</sup> <a name="DecodeTransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput"></a>

```csharp
public string DecodeTransformationInput { get; }
```

- *Type:* string

---

##### `DecodeTweakInput`<sup>Optional</sup> <a name="DecodeTweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput"></a>

```csharp
public string DecodeTweakInput { get; }
```

- *Type:* string

---

##### `EncodedValueInput`<sup>Optional</sup> <a name="EncodedValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput"></a>

```csharp
public string EncodedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput"></a>

```csharp
public string TransformationInput { get; }
```

- *Type:* string

---

##### `TweakInput`<sup>Optional</sup> <a name="TweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput"></a>

```csharp
public string TweakInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `DecodeTransformation`<sup>Required</sup> <a name="DecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation"></a>

```csharp
public string DecodeTransformation { get; }
```

- *Type:* string

---

##### `DecodeTweak`<sup>Required</sup> <a name="DecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak"></a>

```csharp
public string DecodeTweak { get; }
```

- *Type:* string

---

##### `EncodedValue`<sup>Required</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue"></a>

```csharp
public string EncodedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation"></a>

```csharp
public string Transformation { get; }
```

- *Type:* string

---

##### `Tweak`<sup>Required</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak"></a>

```csharp
public string Tweak { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformRewrapConfig <a name="DataVaultTransformRewrapConfig" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultTransformRewrapConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Path,
    string RoleName,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput = null,
    string DecodeTransformation = null,
    string DecodeTweak = null,
    string EncodedValue = null,
    string Id = null,
    string Namespace = null,
    string Transformation = null,
    string Tweak = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path">Path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName">RoleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput">BatchInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation">DecodeTransformation</a></code> | <code>string</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak">DecodeTweak</a></code> | <code>string</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue">EncodedValue</a></code> | <code>string</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation">Transformation</a></code> | <code>string</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak">Tweak</a></code> | <code>string</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value">Value</a></code> | <code>string</code> | The value to rewrap. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `DecodeTransformation`<sup>Optional</sup> <a name="DecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation"></a>

```csharp
public string DecodeTransformation { get; set; }
```

- *Type:* string

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `DecodeTweak`<sup>Optional</sup> <a name="DecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak"></a>

```csharp
public string DecodeTweak { get; set; }
```

- *Type:* string

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `EncodedValue`<sup>Optional</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue"></a>

```csharp
public string EncodedValue { get; set; }
```

- *Type:* string

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation"></a>

```csharp
public string Transformation { get; set; }
```

- *Type:* string

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `Tweak`<sup>Optional</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak"></a>

```csharp
public string Tweak { get; set; }
```

- *Type:* string

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---



