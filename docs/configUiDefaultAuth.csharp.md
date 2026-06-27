# `configUiDefaultAuth` Submodule <a name="`configUiDefaultAuth` Submodule" id="@cdktn/provider-vault.configUiDefaultAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiDefaultAuth <a name="ConfigUiDefaultAuth" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth vault_config_ui_default_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ConfigUiDefaultAuth(Construct Scope, string Id, ConfigUiDefaultAuthConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes">ResetBackupAuthTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance">ResetDisableInheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath">ResetNamespacePath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackupAuthTypes` <a name="ResetBackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes"></a>

```csharp
private void ResetBackupAuthTypes()
```

##### `ResetDisableInheritance` <a name="ResetDisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance"></a>

```csharp
private void ResetDisableInheritance()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNamespacePath` <a name="ResetNamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath"></a>

```csharp
private void ResetNamespacePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConfigUiDefaultAuth.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConfigUiDefaultAuth.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConfigUiDefaultAuth.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConfigUiDefaultAuth.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigUiDefaultAuth to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigUiDefaultAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigUiDefaultAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput">BackupAuthTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput">DefaultAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput">DisableInheritanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes">BackupAuthTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType">DefaultAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance">DisableInheritance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BackupAuthTypesInput`<sup>Optional</sup> <a name="BackupAuthTypesInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput"></a>

```csharp
public string[] BackupAuthTypesInput { get; }
```

- *Type:* string[]

---

##### `DefaultAuthTypeInput`<sup>Optional</sup> <a name="DefaultAuthTypeInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput"></a>

```csharp
public string DefaultAuthTypeInput { get; }
```

- *Type:* string

---

##### `DisableInheritanceInput`<sup>Optional</sup> <a name="DisableInheritanceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput"></a>

```csharp
public bool|IResolvable DisableInheritanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `BackupAuthTypes`<sup>Required</sup> <a name="BackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes"></a>

```csharp
public string[] BackupAuthTypes { get; }
```

- *Type:* string[]

---

##### `DefaultAuthType`<sup>Required</sup> <a name="DefaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType"></a>

```csharp
public string DefaultAuthType { get; }
```

- *Type:* string

---

##### `DisableInheritance`<sup>Required</sup> <a name="DisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance"></a>

```csharp
public bool|IResolvable DisableInheritance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiDefaultAuthConfig <a name="ConfigUiDefaultAuthConfig" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ConfigUiDefaultAuthConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultAuthType,
    string Name,
    string[] BackupAuthTypes = null,
    bool|IResolvable DisableInheritance = null,
    string Namespace = null,
    string NamespacePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType">DefaultAuthType</a></code> | <code>string</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name">Name</a></code> | <code>string</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes">BackupAuthTypes</a></code> | <code>string[]</code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance">DisableInheritance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultAuthType`<sup>Required</sup> <a name="DefaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType"></a>

```csharp
public string DefaultAuthType { get; set; }
```

- *Type:* string

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `BackupAuthTypes`<sup>Optional</sup> <a name="BackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes"></a>

```csharp
public string[] BackupAuthTypes { get; set; }
```

- *Type:* string[]

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `DisableInheritance`<sup>Optional</sup> <a name="DisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance"></a>

```csharp
public bool|IResolvable DisableInheritance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `NamespacePath`<sup>Optional</sup> <a name="NamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---



