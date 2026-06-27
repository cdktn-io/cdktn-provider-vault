# `userpassAuthBackendUser` Submodule <a name="`userpassAuthBackendUser` Submodule" id="@cdktn/provider-vault.userpassAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserpassAuthBackendUser <a name="UserpassAuthBackendUser" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new UserpassAuthBackendUser(Construct Scope, string Id, UserpassAuthBackendUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig">UserpassAuthBackendUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig">UserpassAuthBackendUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo">ResetPasswordHashWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion">ResetPasswordHashWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPasswordHashWo` <a name="ResetPasswordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo"></a>

```csharp
private void ResetPasswordHashWo()
```

##### `ResetPasswordHashWoVersion` <a name="ResetPasswordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion"></a>

```csharp
private void ResetPasswordHashWoVersion()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo"></a>

```csharp
private void ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion"></a>

```csharp
private void ResetPasswordWoVersion()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

UserpassAuthBackendUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

UserpassAuthBackendUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

UserpassAuthBackendUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

UserpassAuthBackendUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserpassAuthBackendUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserpassAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the UserpassAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput">PasswordHashWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput">PasswordHashWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo">PasswordHashWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion">PasswordHashWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordHashWoInput`<sup>Optional</sup> <a name="PasswordHashWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput"></a>

```csharp
public string PasswordHashWoInput { get; }
```

- *Type:* string

---

##### `PasswordHashWoVersionInput`<sup>Optional</sup> <a name="PasswordHashWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput"></a>

```csharp
public double PasswordHashWoVersionInput { get; }
```

- *Type:* double

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput"></a>

```csharp
public double PasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PasswordHashWo`<sup>Required</sup> <a name="PasswordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo"></a>

```csharp
public string PasswordHashWo { get; }
```

- *Type:* string

---

##### `PasswordHashWoVersion`<sup>Required</sup> <a name="PasswordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion"></a>

```csharp
public double PasswordHashWoVersion { get; }
```

- *Type:* double

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo"></a>

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion"></a>

```csharp
public double PasswordWoVersion { get; }
```

- *Type:* double

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserpassAuthBackendUserConfig <a name="UserpassAuthBackendUserConfig" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new UserpassAuthBackendUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Username,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string Namespace = null,
    string PasswordHashWo = null,
    double PasswordHashWoVersion = null,
    string PasswordWo = null,
    double PasswordWoVersion = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username">Username</a></code> | <code>string</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo">PasswordHashWo</a></code> | <code>string</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion">PasswordHashWoVersion</a></code> | <code>double</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo">PasswordWo</a></code> | <code>string</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>double</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `PasswordHashWo`<sup>Optional</sup> <a name="PasswordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo"></a>

```csharp
public string PasswordHashWo { get; set; }
```

- *Type:* string

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `PasswordHashWoVersion`<sup>Optional</sup> <a name="PasswordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion"></a>

```csharp
public double PasswordHashWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion"></a>

```csharp
public double PasswordWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---



