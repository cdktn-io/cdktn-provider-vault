# `osSecretBackendHost` Submodule <a name="`osSecretBackendHost` Submodule" id="@cdktn/provider-vault.osSecretBackendHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendHost <a name="OsSecretBackendHost" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host vault_os_secret_backend_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OsSecretBackendHost(Construct Scope, string Id, OsSecretBackendHostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig">OsSecretBackendHostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig">OsSecretBackendHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey">ResetSshHostKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSshHostKey` <a name="ResetSshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey"></a>

```csharp
private void ResetSshHostKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendHost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendHost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendHost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendHost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsSecretBackendHost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsSecretBackendHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput">CustomMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput">SshHostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey">SshHostKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SshHostKeyInput`<sup>Optional</sup> <a name="SshHostKeyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput"></a>

```csharp
public string SshHostKeyInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SshHostKey`<sup>Required</sup> <a name="SshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey"></a>

```csharp
public string SshHostKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendHostConfig <a name="OsSecretBackendHostConfig" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OsSecretBackendHostConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Address,
    string Mount,
    string Name,
    System.Collections.Generic.IDictionary<string, string> CustomMetadata = null,
    bool|IResolvable DisableAutomatedRotation = null,
    string Namespace = null,
    string PasswordPolicy = null,
    double Port = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    string SshHostKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address">Address</a></code> | <code>string</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name">Name</a></code> | <code>string</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port">Port</a></code> | <code>double</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey">SshHostKey</a></code> | <code>string</code> | SSH host key for the host. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `SshHostKey`<sup>Optional</sup> <a name="SshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey"></a>

```csharp
public string SshHostKey { get; set; }
```

- *Type:* string

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---



