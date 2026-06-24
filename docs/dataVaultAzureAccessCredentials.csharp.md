# `dataVaultAzureAccessCredentials` Submodule <a name="`dataVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultAzureAccessCredentials <a name="DataVaultAzureAccessCredentials" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultAzureAccessCredentials(Construct Scope, string Id, DataVaultAzureAccessCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds">ResetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests">ResetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses">ResetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds">ResetValidateCreds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxCredValidationSeconds` <a name="ResetMaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```csharp
private void ResetMaxCredValidationSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNumSecondsBetweenTests` <a name="ResetNumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```csharp
private void ResetNumSecondsBetweenTests()
```

##### `ResetNumSequentialSuccesses` <a name="ResetNumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```csharp
private void ResetNumSequentialSuccesses()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetValidateCreds` <a name="ResetValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds"></a>

```csharp
private void ResetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultAzureAccessCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultAzureAccessCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultAzureAccessCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultAzureAccessCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultAzureAccessCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultAzureAccessCredentials resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultAzureAccessCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultAzureAccessCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultAzureAccessCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">MaxCredValidationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">NumSecondsBetweenTestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput">NumSequentialSuccessesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput">ValidateCredsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds">ValidateCreds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxCredValidationSecondsInput`<sup>Optional</sup> <a name="MaxCredValidationSecondsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```csharp
public double MaxCredValidationSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NumSecondsBetweenTestsInput`<sup>Optional</sup> <a name="NumSecondsBetweenTestsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```csharp
public double NumSecondsBetweenTestsInput { get; }
```

- *Type:* double

---

##### `NumSequentialSuccessesInput`<sup>Optional</sup> <a name="NumSequentialSuccessesInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```csharp
public double NumSequentialSuccessesInput { get; }
```

- *Type:* double

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ValidateCredsInput`<sup>Optional</sup> <a name="ValidateCredsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput"></a>

```csharp
public bool|IResolvable ValidateCredsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxCredValidationSeconds`<sup>Required</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```csharp
public double MaxCredValidationSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NumSecondsBetweenTests`<sup>Required</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```csharp
public double NumSecondsBetweenTests { get; }
```

- *Type:* double

---

##### `NumSequentialSuccesses`<sup>Required</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```csharp
public double NumSequentialSuccesses { get; }
```

- *Type:* double

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValidateCreds`<sup>Required</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds"></a>

```csharp
public bool|IResolvable ValidateCreds { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultAzureAccessCredentialsConfig <a name="DataVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultAzureAccessCredentialsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string Role,
    string Environment = null,
    string Id = null,
    double MaxCredValidationSeconds = null,
    string Namespace = null,
    double NumSecondsBetweenTests = null,
    double NumSequentialSuccesses = null,
    string SubscriptionId = null,
    string TenantId = null,
    bool|IResolvable ValidateCreds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend">Backend</a></code> | <code>string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role">Role</a></code> | <code>string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment">Environment</a></code> | <code>string</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>double</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>double</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>double</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds">ValidateCreds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#role DataVaultAzureAccessCredentials#role}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCredValidationSeconds`<sup>Optional</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```csharp
public double MaxCredValidationSeconds { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}

---

##### `NumSecondsBetweenTests`<sup>Optional</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```csharp
public double NumSecondsBetweenTests { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `NumSequentialSuccesses`<sup>Optional</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```csharp
public double NumSequentialSuccesses { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}

---

##### `ValidateCreds`<sup>Optional</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```csharp
public bool|IResolvable ValidateCreds { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}

---



