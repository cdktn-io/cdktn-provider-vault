# `dataVaultTransformEncode` Submodule <a name="`dataVaultTransformEncode` Submodule" id="@cdktn/provider-vault.dataVaultTransformEncode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformEncode <a name="DataVaultTransformEncode" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode vault_transform_encode}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultTransformEncode(Construct Scope, string Id, DataVaultTransformEncodeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig">DataVaultTransformEncodeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig">DataVaultTransformEncodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults">ResetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue">ResetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation">ResetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak">ResetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput"></a>

```csharp
private void ResetBatchInput()
```

##### `ResetBatchResults` <a name="ResetBatchResults" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults"></a>

```csharp
private void ResetBatchResults()
```

##### `ResetEncodedValue` <a name="ResetEncodedValue" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue"></a>

```csharp
private void ResetEncodedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation"></a>

```csharp
private void ResetTransformation()
```

##### `ResetTweak` <a name="ResetTweak" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak"></a>

```csharp
private void ResetTweak()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformEncode resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformEncode.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformEncode.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformEncode.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultTransformEncode.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultTransformEncode resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransformEncode to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransformEncode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformEncode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput">BatchInputInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput">BatchResultsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput">EncodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput">TransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput">TweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput">BatchInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults">BatchResults</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue">EncodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation">Transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak">Tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResultsInput`<sup>Optional</sup> <a name="BatchResultsInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResultsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `EncodedValueInput`<sup>Optional</sup> <a name="EncodedValueInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput"></a>

```csharp
public string EncodedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput"></a>

```csharp
public string TransformationInput { get; }
```

- *Type:* string

---

##### `TweakInput`<sup>Optional</sup> <a name="TweakInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput"></a>

```csharp
public string TweakInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `EncodedValue`<sup>Required</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue"></a>

```csharp
public string EncodedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation"></a>

```csharp
public string Transformation { get; }
```

- *Type:* string

---

##### `Tweak`<sup>Required</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak"></a>

```csharp
public string Tweak { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformEncodeConfig <a name="DataVaultTransformEncodeConfig" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultTransformEncodeConfig {
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
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults = null,
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
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path">Path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName">RoleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput">BatchInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults">BatchResults</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | The result of encoding batch_input. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue">EncodedValue</a></code> | <code>string</code> | The result of encoding a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation">Transformation</a></code> | <code>string</code> | The transformation to perform. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak">Tweak</a></code> | <code>string</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value">Value</a></code> | <code>string</code> | The value in which to encode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#path DataVaultTransformEncode#path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchInput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `BatchResults`<sup>Optional</sup> <a name="BatchResults" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] BatchResults { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `EncodedValue`<sup>Optional</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue"></a>

```csharp
public string EncodedValue { get; set; }
```

- *Type:* string

The result of encoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation"></a>

```csharp
public string Transformation { get; set; }
```

- *Type:* string

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `Tweak`<sup>Optional</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak"></a>

```csharp
public string Tweak { get; set; }
```

- *Type:* string

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in which to encode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/transform_encode#value DataVaultTransformEncode#value}

---



